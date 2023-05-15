async function sleep(millis) {
    await new Promise(res=>setTimeout(res,millis));
}

//TS
// async function sleep(millis: number): Promise<void> {
//     await new Promise(res=>setTimeout(res,millis));
// }
