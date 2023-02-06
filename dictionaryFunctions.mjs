
import languageFiles from ".languageFiles/no.json" assert {"json"};

class Dictionary{

    this.languageFiles = languages
    this.Dictionary = null
    this.currentLanguage = null
};

setLanguage = async function(lang){

    let languageFiles = this.languageFiles.find (file => {
        return file.indexOf(lang) != -1
    });

    this.currentLanguage = lang;
    this.Dictionary = await import (languageFiles, {assert: { type: "json"}
});

};

get = function(test1){
    return this.Dictionary[test1]
};

test = function(){
    return Object.test (this.Dictionary)
};

export default Dictionary;
