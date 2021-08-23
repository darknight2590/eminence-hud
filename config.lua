--  ___ __  __ ___ _  _ ___ _  _  ___ ___   ___ _____ _   _ ___ ___ ___  ___ 
-- | __|  \/  |_ _| \| | __| \| |/ __| __| / __|_   _| | | |   \_ _/ _ \/ __|
-- | _|| |\/| || || .` | _|| .` | (__| _|  \__ \ | | | |_| | |) | | (_) \__ \
-- |___|_|  |_|___|_|\_|___|_|\_|\___|___| |___/ |_|  \___/|___/___\___/|___/
--                     https://github.com/orgs/Eminence-Studios

QBHud = {}
QBHud.Show = true
QBHud.Money = {}
QBHud.Money.ShowConstant = false 
QBHud.Radar = {}
QBHud.Radar.NoRadarVehicles = {
    "bmx",
    "cruiser",
    "fixter",
    "scorcher",
    "tribike",
    "tribike2",
    "tribike3",
}
QBStress = {}
QBStress.Intensity = {
    ["shake"] = {
        [1] = {
            min = 50,
            max = 60,
            intensity = 0.12,
        },
        [2] = {
            min = 60,
            max = 70,
            intensity = 0.17,
        },
        [3] = {
            min = 70,
            max = 80,
            intensity = 0.22,
        },
        [4] = {
            min = 80,
            max = 90,
            intensity = 0.28,
        },
        [5] = {
            min = 90,
            max = 100,
            intensity = 0.32,
        },
    }
}
QBStress.MinimumStress = 50
QBStress.MinimumSpeed = 50
QBStress.EffectInterval = {
    [1] = {
        min = 50,
        max = 60,
        timeout = math.random(50000, 60000)
    },
    [2] = {
        min = 60,
        max = 70,
        timeout = math.random(40000, 50000)
    },
    [3] = {
        min = 70,
        max = 80,
        timeout = math.random(30000, 40000)
    },
    [4] = {
        min = 80,
        max = 90,
        timeout = math.random(20000, 30000)
    },
    [5] = {
        min = 90,
        max = 100,
        timeout = math.random(15000, 20000)
    }
}