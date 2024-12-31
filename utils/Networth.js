import request from "../../requestV2";
import Promise from "../../PromiseV2";
import { CleanPrefix } from "./Constants";

/**
 * Formats a number as a readable string with suffixes (K, M, B)
 * @param {number} num - The number to format
 * @returns {string} - Formatted string
 */
function formatNumber(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + "B";
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K";
    }
    return num.toFixed(0);
}

/**
 * Gets the networth data for a player from SkyCrypt API
 * @param {string} username - Minecraft username
 * @returns {Promise} - Networth data or error
 */
export function getPlayerNetworth(username) {
    return new Promise((resolve) => {
        request({
            url: `https://sky.shiiyu.moe/api/v2/profile/${username}`,
            method: "GET",
            headers: {
                "User-Agent": "Mozilla/5.0"
            }
        }).then(response => {
            try {
                const data = JSON.parse(response);
                
                // Check if profiles exist
                if (!data.profiles || Object.keys(data.profiles).length === 0) {
                    resolve({ 
                        success: false, 
                        error: `No profiles found for ${username}`
                    });
                    return;
                }

                // Find the current profile
                let currentProfile = null;
                for (const profileId in data.profiles) {
                    if (data.profiles[profileId].current) {
                        currentProfile = data.profiles[profileId];
                        break;
                    }
                }

                if (!currentProfile) {
                    resolve({ 
                        success: false, 
                        error: `No current profile found for ${username}` 
                    });
                    return;
                }

                // Extract networth data
                const networthData = currentProfile.data?.networth;
                if (!networthData) {
                    resolve({ 
                        success: false, 
                        error: `No networth data available for ${username}` 
                    });
                    return;
                }

                resolve({
                    success: true,
                    data: {
                        username: username,
                        profileName: currentProfile.cute_name,
                        gameMode: currentProfile.game_mode,
                        networth: formatNumber(networthData.networth),
                        unsoulboundNetworth: formatNumber(networthData.unsoulboundNetworth),
                        noInventory: networthData.noInventory,
                        raw: {
                            networth: networthData.networth,
                            unsoulboundNetworth: networthData.unsoulboundNetworth
                        }
                    }
                });
            } catch (error) {
                console.error(`${CleanPrefix} Error processing networth data:`, error)
                resolve({
                    success: false,
                    error: `Failed to process networth data for ${username}`
                });
            }
        }).catch(error => {
            console.error(`${CleanPrefix} Error fetching netwoth data:`, error);
            resolve({
                success: false,
                error: `Failed to fetch networth data for ${username}`
            });
        });
    });
}

/**
 * Formats the networth message for chat
 * @param {Object} data - Networth data from getPlayerNetworth
 * @returns {string} - Formatted message
 */
export function formatNetworthMessage(data) {
    const gameModeSuffix = data.gameMode !== "normal" ? ` [${data.gameMode}]` : "";
    return `${data.username}'s Networth (${data.profileName}${gameModeSuffix}): ` +
           `${data.networth} | Unsoulbound: ${data.unsoulboundNetworth}`;
}