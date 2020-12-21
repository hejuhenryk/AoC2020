declare const readDocs: (docs: string[]) => {
    [k: string]: string;
}[];
declare const countValidPass: (unsortedDocs: {
    [k: string]: string;
}[]) => number;
