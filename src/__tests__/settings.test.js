import Settings from "../Settings";

const setup = new Settings();

test("Should have correct default settings", () => {
    expect(setup.defaultSettings.get("theme")).toEqual("dark");
    expect(setup.defaultSettings.get("music")).toEqual("trance");
    expect(setup.defaultSettings.get("difficulty")).toEqual("easy");
});

test("Should set up correct user's settings", () => {
    setup.setUserSetting("theme", "gray");
    setup.setUserSetting("music", "rock");
    setup.setUserSetting("difficulty", "nightmare");

    expect(setup.userSettings.get("theme")).toEqual("gray");
    expect(setup.userSettings.get("music")).toEqual("rock");
    expect(setup.userSettings.get("difficulty")).toEqual("nightmare");
});

test("Settings function should return correct Map", () => {
    expect(setup.settings).toEqual(
        new Map([
            ["theme", "gray"],
            ["music", "rock"],
            ["difficulty", "nightmare"],
        ])
    );
});