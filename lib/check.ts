export namespace WCVersionChecker {
    export enum WCVersion {
        PATCHLEVEL_1_31_1,
        PATCHLEVEL_1_32_0,
        PATCHLEVEL_1_32_1,
        PATCHLEVEL_1_32_3,
        PATCHLEVEL_1_32_6,
    }

    export function GetReleaseVersion(): WCVersion {
        let currentVersion = WCVersion.PATCHLEVEL_1_31_1;
        if(globalThis.hasOwnProperty('BlzSetUnitFacingEx')) { // added in 1.32
            currentVersion++;
        }
        if(globalThis.hasOwnProperty('SetThematicMusicVolume')) { // added in 1.32.1
            currentVersion++;
        }
        if(globalThis.hasOwnProperty('EVENT_UNIT_STACK_ITEM')) { // added in 1.32.3
            currentVersion++;
        }
        if(globalThis.hasOwnProperty('BlzFrameGetChildrenCount')) { // added in 1.32.6
            currentVersion++;
        }


        return currentVersion;
    }
}

