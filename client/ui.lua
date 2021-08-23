--  ___ __  __ ___ _  _ ___ _  _  ___ ___   ___ _____ _   _ ___ ___ ___  ___ 
-- | __|  \/  |_ _| \| | __| \| |/ __| __| / __|_   _| | | |   \_ _/ _ \/ __|
-- | _|| |\/| || || .` | _|| .` | (__| _|  \__ \ | | | |_| | |) | | (_) \__ \
-- |___|_|  |_|___|_|\_|___|_|\_|\___|___| |___/ |_|  \___/|___/___\___/|___/
--                     https://github.com/orgs/Eminence-Studios

local speed = 0.0
local seatbeltOn = false
local cruiseOn = false
local talking = 66
local bleedingPercentage = 0
local hunger = 100
local thirst = 100
local level = 100

function CalculateTimeToDisplay()
	hour = GetClockHours()
    minute = GetClockMinutes()
    
    local obj = {}
    
	if minute <= 9 then
		minute = "0" .. minute
    end
    
	if hour <= 9 then
		hour = "0" .. hour
    end
    
    obj.hour = hour
    obj.minute = minute

    return obj
end

local toggleHud = true

RegisterNetEvent('hud:toggleHud')
AddEventHandler('hud:toggleHud', function(toggleHud)
    QBHud.Show = toggleHud
end)

RegisterNetEvent("hud:client:voiceproximity")
AddEventHandler("hud:client:voiceproximity", function(level)
    if level == 1 then
            talking = 33
    elseif level == 2 then
            talking = 66
    elseif level == 3 then
            talking = 100
    end

end)


RegisterNetEvent("hud:client:update:needs")
AddEventHandler("hud:client:update:needs", function(NewHunger, NewThirst)
    hunger, thirst = newHunger, newThirst
end)

RegisterNetEvent('hud:client:update:stress')
AddEventHandler('hud:client:update:stress', function(NewStress)
    stress = newStress
end)

Citizen.CreateThread(function()
    Citizen.Wait(500)
    while true do 
        if Framework ~= nil and isLoggedIn and QBHud.Show then
            Framework.Functions.GetPlayerData(function(PlayerData)
                if PlayerData ~= nil and PlayerData.money ~= nil then
                    CashAmount = PlayerData.money["cash"]
                    hunger, thirst, stress = PlayerData.metadata["hunger"], PlayerData.metadata["thirst"], PlayerData.metadata["stress"]
                end
            end)
            speed = GetEntitySpeed(GetVehiclePedIsIn(PlayerPedId(), false)) * 2.236936
            local Plate = GetVehicleNumberPlateText(GetVehiclePedIsIn(PlayerPedId()))
            local pos = GetEntityCoords(PlayerPedId())
            local time = CalculateTimeToDisplay()
            local speaking = NetworkIsPlayerTalking(PlayerId())
            local street1, street2 = GetStreetNameAtCoord(pos.x, pos.y, pos.z, Citizen.ResultAsInteger(), Citizen.ResultAsInteger())
            local current_zone = GetLabelText(GetNameOfZone(pos.x, pos.y, pos.z))
            local fuel = exports['LegacyFuel']:GetFuel(GetVehiclePedIsIn(PlayerPedId()))
            local engine = (GetVehicleEngineHealth(GetVehiclePedIsIn(PlayerPedId()))/10)
            if hunger < 0 then hunger = 0 end
            if thirst < 0 then thirst = 0 end
            if stress < 0 then stress = 0 end
            SendNUIMessage({
                action = "hudtick",
                show = IsPauseMenuActive(),
                health = GetEntityHealth(PlayerPedId()),
                armor = GetPedArmour(PlayerPedId()),
                thirst = thirst,
                hunger = hunger,
                engine = engine,
                stress = stress,
                seatbelt = seatbeltOn,
                speaking = speaking,
                talking = talking,
                street1 = GetStreetNameFromHashKey(street1),
                street2 = GetStreetNameFromHashKey(street2),
                area_zone = current_zone,
                speed = math.ceil(speed),
                fuel = fuel,
                on = on,
                nivel = nivel,
                activo = activo,
                time = time,
                togglehud = toggleHud
            })
            Citizen.Wait(500)
        else
            Citizen.Wait(1000)
        end
    end
end)

Citizen.CreateThread(function()
    while true do
        if Framework ~= nil and isLoggedIn and QBHud.Show then
            if IsPedInAnyVehicle(PlayerPedId(), false) then
                speed = GetEntitySpeed(GetVehiclePedIsIn(PlayerPedId(), false)) * 2.236936
                if speed >= QBStress.MinimumSpeed then
                    TriggerServerEvent('hud:server:gain:stress', math.random(1, 2))
                end
            end
        end
        Citizen.Wait(20000)
    end
end)

local radarActive = false
Citizen.CreateThread(function() 
    while true do
        Citizen.Wait(1000)
        if IsPedInAnyVehicle(PlayerPedId()) and isLoggedIn and QBHud.Show then
            DisplayRadar(true)
            SendNUIMessage({
                action = "car",
                show = true,
            })
            radarActive = true
        else
            DisplayRadar(false)
            SendNUIMessage({
                action = "car",
                show = false,
            })
            seatbeltOn = false
            cruiseOn = false

            SendNUIMessage({
                action = "seatbelt",
                seatbelt = seatbeltOn,
            })
            SendNUIMessage({
                action = "cruise",
                cruise = cruiseOn,
            })
            radarActive = false
        end
    end
end)

RegisterNetEvent("hud:client:UpdateNeeds")
AddEventHandler("hud:client:UpdateNeeds", function(newHunger, newThirst)
    hunger = newHunger
    thirst = newThirst
end)

RegisterNetEvent("hud:client:EngineHealth")
AddEventHandler("hud:client:EngineHealth", function(newEngine)
    engine = newEngine
end)

RegisterNetEvent("seatbelt:client:ToggleSeatbelt")
AddEventHandler("seatbelt:client:ToggleSeatbelt", function(toggle)
    if toggle == nil then
        seatbeltOn = not seatbeltOn
        SendNUIMessage({
            action = "seatbelt",
            seatbelt = seatbeltOn,
        })
    else
        seatbeltOn = toggle
        SendNUIMessage({
            action = "seatbelt",
            seatbelt = toggle,
        })
    end
end)



RegisterNetEvent('hud:client:UpdateNitrous')
AddEventHandler('hud:client:UpdateNitrous', function(toggle, level, IsActive)
        on = toggle
        nivel = level
        activo = IsActive
end)
local LastHeading = nil
local Rotating = "left"

RegisterCommand("neon", function()
    local veh = GetVehiclePedIsIn(PlayerPedId())
    if veh ~= nil and veh ~= 0 and veh ~= 1 then
        if IsVehicleNeonLightEnabled(veh) then
            SetVehicleNeonLightEnabled(veh, 0, false)
            SetVehicleNeonLightEnabled(veh, 1, false)
            SetVehicleNeonLightEnabled(veh, 2, false)
            SetVehicleNeonLightEnabled(veh, 3, false)
        else
            SetVehicleNeonLightEnabled(veh, 0, true)
            SetVehicleNeonLightEnabled(veh, 1, true)
            SetVehicleNeonLightEnabled(veh, 2, true)
            SetVehicleNeonLightEnabled(veh, 3, true)
        end
    end
end, false)
