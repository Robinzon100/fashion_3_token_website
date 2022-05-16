export const buttonThemeNames = ['cta', 'purple', 'white'] as const;



export const chooseButtonTheme = (themeName: string): string => {
    let theme: string = 'none';

    switch (themeName) {
        case buttonThemeNames[0]:
            theme = `
                background-image: var(--gradient-main);
                border: 3.5px solid #ffffff;
                box-shadow: 0px 41px 35px -18px rgba(7, 6, 13, 0.87),
                            inset 0px 0px 10px 14px rgba(255, 255, 255, 0.25),
                            inset 0px 0px 16px rgba(0, 0, 0, 0.25);
                border-radius: 19px;`;
            break;
        case buttonThemeNames[1]:
            theme = `
                background: var(--gradient-purple);
                box-shadow: 0px 41px 35px -18px rgba(7, 6, 13, 0.87),
                            inset 0px 0px 10px 14px rgba(255, 255, 255, 0.03), 
                            inset 0px 0px 16px rgba(0, 0, 0, 0.25);
                border-radius: 17px;`;
            break;
        case buttonThemeNames[2]:
            theme = `
                background: linear-gradient(180deg, #EFEFF1 0%, #FCFCFC 50.32%, #B6B2B9 109.1%);
                border: 1px solid #FFFFFF;
                box-shadow: 0px 41px 35px -18px rgba(7, 6, 13, 0.87),
                            inset 0px 0px 10px 14px rgba(255, 255, 255, 0.25),
                            inset 0px 0px 16px rgba(0, 0, 0, 0.25);
                border-radius: 19px;`;
            break;
    }

    return theme;
};