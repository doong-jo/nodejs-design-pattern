const { makeBigFiles } = require("./bigfile-maker");
const { readMultipleFiles } = require("./multiple-bigfile-reader");

const bigFiles = [
    {
        path: "./big1.txt",
        content:
            "bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1 bigfile1\n"
    },
    {
        path: "./big2.txt",
        content:
            "bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2 bigfile2\n"
    },
    {
        path: "./big3.txt",
        content:
            "bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3 bigfile3\n"
    }
];
const outputFilePath = "./output.txt";

function mergeBigFiles(files, outputPath) {
    makeBigFiles(files);
    readMultipleFiles(files, outputPath);
}

mergeBigFiles(bigFiles, outputFilePath);
