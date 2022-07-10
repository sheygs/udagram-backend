import fs from 'fs';
import Jimp from 'jimp';

// generate random number
const generateRandomNumber = (): number => Math.floor(Math.random() * 2000);

// inputURL: string - a publicly accessible url to an image file
// to download, filter, and save the filtered image locally
// returns the absolute path to the local image
export async function filterImageFromURL(inputURL: string): Promise<string> {
        return new Promise(async (resolve, reject) => {
                try {
                        const photo = await Jimp.read(inputURL);
                        const outpath = `/tmp/filtered.${generateRandomNumber()}.jpg`;
                        await photo
                                .resize(256, 256) // resize
                                .quality(60) // set JPEG quality
                                .greyscale() // set greyscale
                                .write(`${__dirname}${outpath}`, (img) => {
                                        resolve(`${__dirname}${outpath}`);
                                });
                } catch (error) {
                        reject(error);
                }
        });
}

// to delete files on the local disk
// useful to cleanup after tasks
export async function deleteLocalFiles(files: Array<string>) {
        for (let file of files) {
                fs.unlinkSync(file);
        }
}
