![eminence-hud](https://i.imgur.com/6prfgYe.png)

# eminence-hud
Intricate and sophisticated hud made for [QBCore Framework](https://github.com/qbcore-framework). Inspired by [NoPixel](https://www.nopixel.net/). :green_heart:

# Credits
* All credits for our voice proximity system goes to [mumble-voip](https://github.com/FrazzIe/mumble-voip-fivem)
* All credits for compass and street names goes to [Compass-and-street-name-HUD](https://gitlab.com/MsQuerade/Compass-and-street-name-HUD) and [compass](https://github.com/thelindat/compass) for the improved version 
* Major thanks to [Kyle](https://github.com/Nine2Fivedev) for sharing his edited version of compass, and allowing us to change a few things!

# Dependencies
* [qbcore framework](https://github.com/qbcore-framework) ❤️
* [qb-smallresources](https://github.com/qbcore-framework/qb-smallresources)
* [LegacyFuel](https://github.com/qbcore-framework/LegacyFuel)
* [mumble-voip](https://github.com/FrazzIe/mumble-voip-fivem)

# Our Recommendations for the full hud experience!
* [qb-radar](https://github.com/Eminence-Studios/qb-radar) - you're definitely going to want this radar (minimap), it goes perfect with our hud :)
* [qb-navigation](https://github.com/Eminence-Studios/qb-navigation) - you're definitely going to want this radar compass and street navigation, it goes perfect with our hud :)
* [qb-seatbelt](https://github.com/Eminence-Studios/qb-seatbelt) - you're definitely going to want this seatbelt script, it goes perfect with our hud :)
* [qb-sound](https://github.com/Eminence-Studios/qb-sound) - you're definitely going to want these sounds, it goes perfect with our hud :)

# Features
* Voice proximity radial icon displayed when [shouting, talking normally, or whispering]
* Radial icon designs
* All radial icons realign correctly when updated
* Seat belt radial icon indicator displayed
* Engine health radial icon displayed
* Speedometer and fuel designed similar to NoPixel 
* Nitrous radial icon indicator displayed
* Fuel meter registers
* Stress reduction and gaining registers
* Harness registers (does not display an icon yet, update soon)

# Preview
### IF YOU WANT THE RADAR (MINIMAP) SHOWN IN THESE DEMONSTRATION VIDEOS, LOOK AT OUR RECOMMENDATIONS ABOVE! 🎉

https://user-images.githubusercontent.com/52267651/130407076-2116950d-0d61-454c-91ee-e5bbec7f89b5.mp4

https://user-images.githubusercontent.com/52267651/130405270-758b2fbf-4ee0-4c09-aba0-39b6fbfcc434.mp4

https://user-images.githubusercontent.com/52267651/130405274-2b6d37df-49d1-493e-843d-41da5fdded9f.mp4

https://user-images.githubusercontent.com/52267651/130405256-413ec300-7793-4936-b20a-7e0d806cd6b6.mp4

https://user-images.githubusercontent.com/52267651/130405299-94e2c49c-e5d1-4e1b-9328-91d5b6d272cd.mp4

https://user-images.githubusercontent.com/52267651/130405240-cfd2c4b3-00fa-4015-9729-65b3295b0acb.mp4

https://user-images.githubusercontent.com/52267651/130405390-41adf138-7028-4b3a-8e6f-3c6c461f6e12.mp4

# Installation

## Manual
* Download `eminence-hud` and put it in the `[resources]` directory.
* Download `LegacyFuel` and put it in the `[resources]` directory.
* Download `mumble-voip` and put it in the `[resources]` directory.
* Put `qb-navigation` in the `[resources]` directory.
* Add the following code to your server.cfg/resouces.cfg **[IN THIS EXACT ORDER OF IMPORTANCE!]**
```
ensure LegacyFuel
ensure mumble-voip
ensure qb-navigation
ensure eminence-hud
ensure qb-smallresources
```
## Ignore if you ARE NOT using our recommened list above!
* Download `qb-radar` and put it in the `[resources]` directory.
* Download `qb-navigation` and put it in the `[resources]` directory.
* Download `qb-seatbelt` and open your exisiting `[qb-smallresources]` folder, then drag and drop our `[seatbelt.lua]` inside of there.
* Download `qb-sound` and put it in the `[resources]` directory.
* Add the following code to your server.cfg/resouces.cfg
```
ensure qb-radar
ensure qb-navigation
ensure qb-sound
```

# Change Logs
### 0.0.1
* Initial release

# Issues and Suggestions
Please use the GitHub issues system to report issues or make suggestions, when making suggestion, please keep **[Suggestion]** in the title to make it clear that it is a suggestion.
