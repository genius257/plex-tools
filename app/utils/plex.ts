const fs = require('fs')
const Database = require('better-sqlite3');

class Plex {
    static db = null;

    static dataDirectoryPath = "";

    static ConvertURI(URI: string, strHash: string) {
        strHash = strHash[0] + '/' + strHash.substr(1);
        const protocol = URI.substr(0, URI.indexOf(':'));
        switch (protocol) {
            case 'metadata':
                URI = URI.replace(protocol + "://", "Metadata/Movies/" + strHash + ".bundle/Contents/_combined/");
                break;
            case 'upload':
                URI = URI.replace(protocol + "://", "Metadata/Movies/" + strHash + ".bundle/Uploads/");
                break;
            case 'media':
                URI = URI.replace(protocol + "://", "Media/localhost/");
                break;
            default:
                throw new Error(`invalid protocol: "${protocol}"`);
                break;
        }

        if (!fs.existsSync(this.dataDirectoryPath + URI)) {
            URI = URI.replace('/Movies/', '/TV Shows/');
        }
        return this.dataDirectoryPath + URI;
    }
}

export default Plex;
