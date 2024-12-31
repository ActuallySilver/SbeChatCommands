import { 
    BLACK, 
    DARK_BLUE, 
    DARK_GREEN, 
    DARK_AQUA, 
    DARK_RED, 
    DARK_PURPLE, 
    GOLD, 
    GRAY, 
    DARK_GRAY, 
    BLUE, 
    GREEN, 
    AQUA, 
    RED, 
    LIGHT_PURPLE, 
    YELLOW, 
    WHITE,
    OBFUSCATED, 
    BOLD, 
    STRIKETHROUGH, 
    UNDERLINE, 
    ITALIC, 
    RESET,
    ModuleVersion, 
    ModuleName,  
    Creator,
    Prefix  } from "./utils/Constants";
import { 
    @Vigilant, 
    @SwitchProperty, 
    @DecimalSliderProperty, 
    @TextProperty, 
    @SliderProperty, 
    @CheckboxProperty, 
    @ColorProperty, 
    @ButtonProperty,
    @CheckboxProperty } from 'Vigilance';

const ConfigHeader = `${Prefix} ${YELLOW}${ModuleVersion} \nMade by ${Creator}${RESET}`;
let ClickedDebugButton = false;

@Vigilant(`${ModuleName}`, `${ModuleName}`, {
    getCategoryComparator: () => (a, b) => {
        const order = ["General", "Mining", "Commands", "WIP", "Dev Stuff"];
        return order.indexOf(a.name) - order.indexOf(b.name);
    }
})

class Config {
    // ==================== General Commands Settings ====================
    @SwitchProperty({
        name: "SBE Chat Commands",
        description: "Enable all commands for SBE Chat",
        category: "General",
        subcategory: "Commands"
    })
    enableAllCommands = true;

    @SwitchProperty({
        name: `RNG Command ${DARK_AQUA}!rng${RESET}`,
        description: "Simulates RNG drops with percentages. Use '!rng [item]' to check your luck for specific items.",
        category: "General",
        subcategory: "Commands"
    })
    rngCommand = true;

    @SwitchProperty({
        name: `Coinflip Command ${DARK_AQUA}!cf${RESET}`,
        description: "Flip a virtual coin. Returns heads or tails with colorful messages.",
        category: "General",
        subcategory: "Commands"
    })
    cfCommand = true;

    @SwitchProperty({
        name: `8Ball Command ${DARK_AQUA}!8ball${RESET}`,
        description: "Ask the magic 8-ball a question and receive a mystical answer. Perfect for decision making!",
        category: "General",
        subcategory: "Commands"
    })
    eightBallCommand = true;

    @SwitchProperty({
        name: `Throw Command ${DARK_AQUA}!throw${RESET}`,
        description: "Tells you how hard someone has thrown.",
        category: "General",
        subcategory: "Commands"
    })
    throwCommand = true;

    @SwitchProperty({
        name: `Dice Command ${DARK_AQUA}!dice${RESET}`,
        description: "Roll a six-sided die. Results come with custom messages based on your roll.",
        category: "General",
        subcategory: "Commands"
    })
    diceCommand = true;

    @SwitchProperty({
        name: `Simp Command ${DARK_AQUA}!simp${RESET}`,
        description: "Check someone's simp level with a percentage. Use '!simp [player]'.",
        category: "General",
        subcategory: "Commands"
    })
    simpCommand = true;

    @SwitchProperty({
        name: `Sus Command ${DARK_AQUA}!sus${RESET}`,
        description: "Measure how suspicious someone is with a percentage. Use '!sus [player]' to investigate.",
        category: "General",
        subcategory: "Commands"
    })
    susCommand = true;

    @SwitchProperty({
        name: `Join Command ${DARK_AQUA}!join${RESET}`,
        description: "Allows others to join your party using '!join [your_name]'. Automatically sends party invites.",
        category: "General",
        subcategory: "Commands"
    })
    joinCommand = true;

    @SwitchProperty({
        name: `Help Command ${DARK_AQUA}!<commands, command>${RESET}`,
        description: "Displays available commands and their usage.",
        category: "General",
        subcategory: "Commands"
    })
    commandsCommand = true;

    @SwitchProperty({
        name: `Meow Command ${DARK_AQUA}!meow${RESET}`,
        description: "Join the meow gang! Tracks total meows in SBE Chat and allows for chain reactions.",
        category: "General",
        subcategory: "Commands"
    })
    meowCommand = true;

    @SwitchProperty({
        name: `Quote Command ${DARK_AQUA}!quote${RESET}`,
        description: "Share random quotes from your collection. Use '!quote' to get a random quote.",
        category: "General",
        subcategory: "Commands"
    })
    quoteCommand = true;

    @SwitchProperty({
        name: `TPS Command ${DARK_AQUA}!tps${RESET}`,
        description: "Shows the current server TPS (Ticks Per Second)",
        category: "General",
        subcategory: "Commands"
    })
    tpsCommand = true;
    
    @SwitchProperty({
        name: `Ping Command ${DARK_AQUA}!ping${RESET}`,
        description: "Shows your current ping to the server",
        category: "General",
        subcategory: "Commands"
    })
    pingCommand = true;

    @SwitchProperty({
        name: `Alpha Command ${DARK_AQUA}!alpha${RESET}`,
        description: "Check the status of the Alpha Server and available slots.",
        category: "General",
        subcategory: "Commands"
    })
    alphaCommand = true;

    @SwitchProperty({
        name: `Networth Command ${DARK_AQUA}!nw${RESET}`,
        description: "Check player's networth using SkyCrypt API. Use '!nw [player]' to check specific players.",
        category: "General",
        subcategory: "Commands"
    })
    networthCommand = true;

    @SwitchProperty({
        name: `Mayor Command ${DARK_AQUA}!mayor${RESET}`,
        description: "Shows current Skyblock Mayor and their active perks",
        category: "General",
        subcategory: "Commands"
    })
    mayorCommand = true;
    
    @SwitchProperty({
        name: `Election Command ${DARK_AQUA}!election${RESET}`,
        description: "Shows current Skyblock election information and candidates",
        category: "General",
        subcategory: "Commands"
    })
    electionCommand = true;

    @SwitchProperty({
        name: `Slayer Command ${DARK_AQUA}!slayer${RESET}`,
        description: "Shows player's Slayer levels using SkyCrypt API",
        category: "General",
        subcategory: "Commands"
    })
    slayerCommand = true;

    @SwitchProperty({
        name: `Magical Power Command ${DARK_AQUA}!mp${RESET}`,
        description: "Shows player's total magical power from accessories",
        category: "General",
        subcategory: "Commands"
    })
    magicalPowerCommand = true;

    @SwitchProperty({
        name: `Level Command ${DARK_AQUA}!level${RESET}`,
        description: "Shows player's Skyblock level",
        category: "General",
        subcategory: "Commands"
    })
    levelCommand = true;

    @SwitchProperty({
        name: `Secrets Command ${DARK_AQUA}!secrets${RESET}`,
        description: "Shows player's total dungeon secrets found",
        category: "General",
        subcategory: "Commands"
    })
    secretsCommand = true;

    @SwitchProperty({
        name: `Tax Command ${DARK_AQUA}!tax${RESET}`,
        description: "Calculate auction/BIN taxes. Use '!tax <amount> [derpy]' to calculate taxes, optionally with Derpy rates.",
        category: "General",
        subcategory: "Commands"
    })
    taxCommand = true;

    @SwitchProperty({
        name: `Skills Command ${DARK_AQUA}!skills${RESET}`,
        description: "Shows player's skill levels",
        category: "General",
        subcategory: "Commands"
    })
    skillsCommand = true;

    @SwitchProperty({
        name: `Skill Average Command ${DARK_AQUA}!skillaverage${RESET}`,
        description: "Shows player's skill average",
        category: "General",
        subcategory: "Commands"
    })
    skillAverageCommand = true;

    @SwitchProperty({
        name: `Catacombs Level Command ${DARK_AQUA}!cata${RESET}`,
        description: "Shows player's Catacombs level and progress",
        category: "General",
        subcategory: "Commands"
    })
    cataCommand = true;
    
    @SwitchProperty({
        name: `Dungeon PBs Command ${DARK_AQUA}!pbs${RESET}`,
        description: "Shows player's personal best times for each floor",
        category: "General",
        subcategory: "Commands"
    })
    pbsCommand = true;
    
    @SwitchProperty({
        name: `Class Levels Command ${DARK_AQUA}!class${RESET}`,
        description: "Shows player's dungeon class levels",
        category: "General",
        subcategory: "Commands"
    })
    classCommand = true;
    
    @SwitchProperty({
        name: `Completions Command ${DARK_AQUA}!comp${RESET}`,
        description: "Shows player's floor completion counts",
        category: "General",
        subcategory: "Commands"
    })
    compCommand = true;

    @SwitchProperty({
        name: `Lowest BIN Command ${DARK_AQUA}!lbin${RESET}`,
        description: "Shows lowest BIN prices for items on the auction house",
        category: "General",
        subcategory: "Commands"
    })
    lowestBinCommand = true;

    @SwitchProperty({
        name: "Auto Meow Response",
        description: "Automatically responds with a meow when someone meows in chat (Has a cooldown to prevent spam).",
        category: "General",
        subcategory: "Auto Respnse"
    })
    autoMeowResponse = true;

    // ==================== Mining Features ====================
    @SwitchProperty({
        name: "Announce Corpses in Mineshaft",
        description: `Shows available Frozen Corpses when entering a Mineshaft. \n${RED}${BOLD}Note:${RESET} Currently the room/corpse detection can take a while.`,
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announceCorpsesWithMineshaft = true

    @SwitchProperty({
        name: "Announce Mineshaft Type to Party",
        description: `Automatically tells your party which type of Mineshaft you've discovered. \n${RED}${BOLD}Note:${RESET} Currently the room/corpse detection can take a while.`,
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announceMineshaftTypeToParty = false

    @SwitchProperty({
        name: "Announce Corpses to Party",
        description: `Shares available Frozen Corpses with your party members. \n${RED}${BOLD}Note:${RESET} Currently the room/corpse detection can take a while.`,
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announceCorpsesToParty = false

    @SwitchProperty({
        name: "Enable Announce Mineshafts to SBE Chat",
        description: `Announce Mineshafts to SBE Chat. \n${RED}${BOLD}Note:${RESET} Currently the room/corpse detection can take a while.`,
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    enableAnnounceMineshaftToSbeChat = true

    @CheckboxProperty({
        name: "Announce Topaz Mineshaft",
        description: "Announce Topaz Mineshafts to SBE Chat.",
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announceTopazMineshaft = false

    @CheckboxProperty({
        name: "Announce Sapphire Mineshaft",
        description: "Announce Sapphire Mineshafts to SBE Chat.",
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announceSapphireMineshaft = false

    @CheckboxProperty({
        name: "Announce Amethyst Mineshaft",
        description: "Announce Amethyst Mineshafts to SBE Chat.",
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announceAmethystMineshaft = false

    @CheckboxProperty({
        name: "Announce Amber Mineshaft",
        description: "Announce Amber Mineshafts to SBE Chat.",
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announceAmberMineshaft = false

    @CheckboxProperty({
        name: "Announce Jade Mineshaft",
        description: "Announce Jade Mineshafts to SBE Chat.",
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announceJadeMineshaft = false

    @CheckboxProperty({
        name: "Announce Titanium Mineshaft",
        description: "Announce Titanium Mineshafts to SBE Chat.",
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announceTitaniumMineshaft = false

    @CheckboxProperty({
        name: "Announce Umber Mineshaft",
        description: "Announce Umber Mineshafts to SBE Chat.",
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announceUmberMineshaft = false

    @CheckboxProperty({
        name: "Announce Tungsten Mineshaft",
        description: "Announce Tungsten Mineshafts to SBE Chat.",
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announceTungstenMineshaft = false

    @CheckboxProperty({
        name: "Announce Vanguard Mineshaft",
        description: "Announce Vanguard Mineshafts to SBE Chat.",
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announceVanguardMineshaft = true

    @CheckboxProperty({
        name: "Announce Ruby Mineshaft",
        description: "Announce Ruby Mineshafts to SBE Chat.",
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announceRubyMineshaft = false

    @CheckboxProperty({
        name: "Announce Onyx Mineshaft",
        description: "Announce Onyx Mineshafts to SBE Chat.",
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announceOnyxMineshaft = false

    @CheckboxProperty({
        name: "Announce Aquamarine Mineshaft",
        description: "Announce Aquamarine Mineshafts to SBE Chat.",
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announceAquamarineMineshaft = false

    @CheckboxProperty({
        name: "Announce Citrine Mineshaft",
        description: "Announce Citrine Mineshafts to SBE Chat.",
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announceCitrineMineshaft = false

    @CheckboxProperty({
        name: "Announce Peridot Mineshaft",
        description: "Announce Peridot Mineshafts to SBE Chat.",
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announcePeridotMineshaft = false

    @CheckboxProperty({
        name: "Announce Jasper Mineshaft",
        description: "Announce Jasper Mineshafts to SBE Chat.",
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announceJasperMineshaft = false

    @CheckboxProperty({
        name: "Announce Opal Mineshaft",
        description: "Announce Opal Mineshafts to SBE Chat.",
        category: "Mining",
        subcategory: "Mineshaft Announce"
    })
    announceOpalMineshaft = false

    // ==================== Development Tools ====================
    @ButtonProperty({
        name: "Debug Mode",
        description: "Just for debugging ig..",
        category: "Dev Stuff",
        subcategory: "Dev Stuff",
        placeholder: "Click me!"
    })
    coolMessage() {
        ClickedDebugButton = true;
        ChatLib.chat(`${YELLOW}[NPC] ${GOLD}Debugron${RESET}: Welcome, brave adventurer! I see you're interested in the mysteries of technology.`);
        
        setTimeout(() => {
            ChatLib.chat(`${YELLOW}[NPC] ${GOLD}Debugron${RESET}: Let me check your chat module... ${ITALIC}*taps glass screen*`);
            ChatLib.command(`sbechat @Cinshay do you like cats??`, true);
        }, 2000);
        
        setTimeout(() => {
            ChatLib.chat(`${YELLOW}[NPC] ${GOLD}Debugron${RESET}: Oh my! Something strange appeared in the ancient circuits!`);
        }, 3500);
        
        setTimeout(() => {
            ChatLib.chat(`${YELLOW}[NPC] ${GOLD}Debugron${RESET}: Quick, we must stabilize the magical chat essence before it's too late!`);
        }, 5000);
        
        setTimeout(() => {
            const npcText = new TextComponent(`${YELLOW}[NPC] ${GOLD}Debugron${RESET}: ${GREEN}[Use Magical Debug Crystal]`);
            npcText.setHover("show_text", "Click to answer");
            npcText.setClick("run_command", "/getMeowed");
            ChatLib.chat(npcText);
        }, 6500);
    }

    constructor() {
        this.initialize(this);

        // Category descriptions
        this.setCategoryDescription("General", `${ConfigHeader}`);
        this.setCategoryDescription("Mining", `${ConfigHeader}`);
        this.setCategoryDescription("Dev Stuff", `${ConfigHeader}`);
    
        // Dependencies
        this.addDependency(`RNG Command ${DARK_AQUA}!rng${RESET}`, "SBE Chat Commands");
        this.addDependency(`Coinflip Command ${DARK_AQUA}!cf${RESET}`, "SBE Chat Commands");
        this.addDependency(`8Ball Command ${DARK_AQUA}!8ball${RESET}`, "SBE Chat Commands");
        this.addDependency(`Throw Command ${DARK_AQUA}!throw${RESET}`, "SBE Chat Commands");
        this.addDependency(`Dice Command ${DARK_AQUA}!dice${RESET}`, "SBE Chat Commands");
        this.addDependency(`Simp Command ${DARK_AQUA}!simp${RESET}`, "SBE Chat Commands");
        this.addDependency(`Sus Command ${DARK_AQUA}!sus${RESET}`, "SBE Chat Commands");
        this.addDependency(`Join Command ${DARK_AQUA}!join${RESET}`, "SBE Chat Commands");
        this.addDependency(`Help Command ${DARK_AQUA}!<commands, command>${RESET}`, "SBE Chat Commands");
        this.addDependency(`Meow Command ${DARK_AQUA}!meow${RESET}`, "SBE Chat Commands");
        this.addDependency(`Quote Command ${DARK_AQUA}!quote${RESET}`, "SBE Chat Commands");
        this.addDependency(`TPS Command ${DARK_AQUA}!tps${RESET}`, "SBE Chat Commands");
        this.addDependency(`Ping Command ${DARK_AQUA}!ping${RESET}`, "SBE Chat Commands");
        this.addDependency(`Alpha Command ${DARK_AQUA}!alpha${RESET}`, "SBE Chat Commands");
        this.addDependency(`Networth Command ${DARK_AQUA}!nw${RESET}`, "SBE Chat Commands");
        this.addDependency(`Mayor Command ${DARK_AQUA}!mayor${RESET}`, "SBE Chat Commands");
        this.addDependency(`Election Command ${DARK_AQUA}!election${RESET}`, "SBE Chat Commands");
        this.addDependency(`Slayer Command ${DARK_AQUA}!slayer${RESET}`, "SBE Chat Commands");
        this.addDependency(`Catacombs Level Command ${DARK_AQUA}!cata${RESET}`, "SBE Chat Commands");
        this.addDependency(`Dungeon PBs Command ${DARK_AQUA}!pbs${RESET}`, "SBE Chat Commands");
        this.addDependency(`Class Levels Command ${DARK_AQUA}!class${RESET}`, "SBE Chat Commands");
        this.addDependency(`Completions Command ${DARK_AQUA}!comp${RESET}`, "SBE Chat Commands");
        this.addDependency(`Magical Power Command ${DARK_AQUA}!mp${RESET}`, "SBE Chat Commands");
        this.addDependency(`Level Command ${DARK_AQUA}!level${RESET}`, "SBE Chat Commands");
        this.addDependency(`Secrets Command ${DARK_AQUA}!secrets${RESET}`, "SBE Chat Commands");
        this.addDependency(`Tax Command ${DARK_AQUA}!tax${RESET}`, "SBE Chat Commands");
        this.addDependency(`Skills Command ${DARK_AQUA}!skills${RESET}`, "SBE Chat Commands");
        this.addDependency(`Skill Average Command ${DARK_AQUA}!skillaverage${RESET}`, "SBE Chat Commands");
        this.addDependency(`Lowest BIN Command ${DARK_AQUA}!lbin${RESET}`, "SBE Chat Commands");

        this.addDependency("Announce Topaz Mineshaft", "Enable Announce Mineshafts to SBE Chat");
        this.addDependency("Announce Sapphire Mineshaft", "Enable Announce Mineshafts to SBE Chat");
        this.addDependency("Announce Amethyst Mineshaft", "Enable Announce Mineshafts to SBE Chat");
        this.addDependency("Announce Amber Mineshaft", "Enable Announce Mineshafts to SBE Chat");
        this.addDependency("Announce Jade Mineshaft", "Enable Announce Mineshafts to SBE Chat");
        this.addDependency("Announce Titanium Mineshaft", "Enable Announce Mineshafts to SBE Chat");
        this.addDependency("Announce Umber Mineshaft", "Enable Announce Mineshafts to SBE Chat");
        this.addDependency("Announce Tungsten Mineshaft", "Enable Announce Mineshafts to SBE Chat");
        this.addDependency("Announce Vanguard Mineshaft", "Enable Announce Mineshafts to SBE Chat");
        this.addDependency("Announce Ruby Mineshaft", "Enable Announce Mineshafts to SBE Chat");
        this.addDependency("Announce Onyx Mineshaft", "Enable Announce Mineshafts to SBE Chat");
        this.addDependency("Announce Aquamarine Mineshaft", "Enable Announce Mineshafts to SBE Chat");
        this.addDependency("Announce Citrine Mineshaft", "Enable Announce Mineshafts to SBE Chat");
        this.addDependency("Announce Peridot Mineshaft", "Enable Announce Mineshafts to SBE Chat");
        this.addDependency("Announce Jasper Mineshaft", "Enable Announce Mineshafts to SBE Chat");
        this.addDependency("Announce Opal Mineshaft", "Enable Announce Mineshafts to SBE Chat");
    }
}

export default new Config();

register("command", () => {
    if (ClickedDebugButton) {
        const playerName = Player.getName();
        ChatLib.chat(`${YELLOW}[NPC] ${GOLD}Debugron${RESET}: OHOHO! You activated my trap card!`);
        setTimeout(() => {
            ChatLib.chat(`${YELLOW}[NPC] ${GOLD}Debugron${RESET}: ${ITALIC}*pulls magical lever*`);
            ChatLib.command(`sbechat OH NO! ${playerName} just got ambushed and meowed by @jcnlk! How embarrassing!`, true);
        }, 1000);
        ClickedDebugButton = false
    }
    else {
        ChatLib.chat(`${Prefix} ${RED}Stop running random commands!${RESET}`)
    }
}).setName("getMeowed");