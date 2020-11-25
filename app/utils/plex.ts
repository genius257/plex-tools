const fs = require('fs');
const Database = require('better-sqlite3');

class Plex {
  static db: any = null;

  static dataDirectoryPath = '';

  static ConvertURI(URI: string, strHash: string) {
    let URI2 = URI;
    const strHash2 = `${strHash[0]}/${strHash.substr(1)}`;
    const protocol = URI.substr(0, URI.indexOf(':'));
    switch (protocol) {
      case 'metadata':
        URI2 = URI.replace(
          `${protocol}://`,
          `Metadata/Movies/${strHash2}.bundle/Contents/_combined/`
        );
        break;
      case 'upload':
        URI2 = URI.replace(
          `${protocol}://`,
          `Metadata/Movies/${strHash2}.bundle/Uploads/`
        );
        break;
      case 'media':
        URI2 = URI.replace(`${protocol}://`, 'Media/localhost/');
        break;
      default:
        throw new Error(`invalid protocol: "${protocol}"`);
        break;
    }

    if (!fs.existsSync(this.dataDirectoryPath + URI2)) {
      URI2 = URI.replace('/Movies/', '/TV Shows/');
    }
    return this.dataDirectoryPath + URI2;
  }
}

export default Plex;
