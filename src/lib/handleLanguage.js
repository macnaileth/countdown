export const resolveLangStr = ( string, languageData, cat = 'default' ) => {
    
    const resLangData = languageData[ string ];
    
    return resLangData ? resLangData[ cat ] ? resLangData[ cat ] : resLangData : '';
    
};


