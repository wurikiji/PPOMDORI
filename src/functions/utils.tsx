export function formatNum(num: string | number, len: number) 
{
    let length = num.toString().length;
    num = "0".repeat(len - length) + num;

    return num;
}

export function getElapsedTime(diff: number): string
{
    let ms: string | number = diff % 1000;
    ms = formatNum(Math.floor(ms / 10), 2);
    diff = Math.floor(diff / 1000);
    let sec = formatNum(diff % 60, 2);
    diff = Math.floor(diff / 60);
    let min = formatNum(diff % 60, 2);
    diff = Math.floor(diff / 60);
    let hour = formatNum(diff, 2);

    return `${hour}:${min}:${sec}.${ms}`;
}