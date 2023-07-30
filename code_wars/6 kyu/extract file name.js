// https://www.codewars.com/kata/597770e98b4b340e5b000071/train/javascript

class FileNameExtractor {
    static extractFileName(dirtyFileName) {
        const regex = /\d+_(.+?\.\w{2,})\./;
        const result = dirtyFileName.match(regex)[1];
        return result;
    }
}

function main() {
    console.log(
        FileNameExtractor.extractFileName('1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION')
    );
}
if (require.main === module) {
    main();
}
