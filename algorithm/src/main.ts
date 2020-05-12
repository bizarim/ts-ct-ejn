import { solutionWithArr } from './index';

const stdin = process.openStdin();

console.log('====== 실 행 방 법 ======');
console.log('2개 인자 사이는 space');
console.log('추가 입력은 enter');
console.log('입력 인자 모두 제거 clear');
console.log('output 보기는 show 입력');
console.log('종료는 q 입력');
console.log('=========================');

type InputArgs = {
    check: boolean,
    inputs: number[];
};
const list: number[][] = [];

stdin.addListener('data', args => {
    switch (args.toString().trim()) {
        case 'q': process.exit();
        case 'show': showResult(); break;
        case 'clear': list.splice(0, list.length); break;
        default:
            const inputAgs = checkInputArgs(args.toString().split(' '));
            if (inputAgs.check) list.push(inputAgs.inputs);
            break;
    }
});

const checkInputArgs = (splitArr: string[]): InputArgs => {
    const inputArgs: InputArgs = { check: false, inputs: [] };

    if (splitArr.length !== 2) {
        console.log('인자 개수 오류');
        return inputArgs;
    }
    for (let i = 0; i < splitArr.length; ++i) {
        const num = parseInt(splitArr[i]);
        if (typeof num !== 'number') {
            console.log('인자 타입 오류');
            return inputArgs;
        }
        if (isNaN(num)) {
            console.log('인자 타입 오류');
            return inputArgs;
        }

        inputArgs.inputs.push(num);
    }
    inputArgs.check = true;
    return inputArgs;
};

const showResult = () => {
    console.log('====== reuslt show ======');
    for (let i = 0; i < list.length; ++i) {
        process.stdout.write(`[${i + 1}] `);
        for (let j = 0; j < list[i].length; ++j) {
            process.stdout.write(`${list[i][j]}`);
            j === list.length ? process.stdout.write(' ') : process.stdout.write(', ');
        }
        process.stdout.write(`=> ${solutionWithArr(list[i])}\n`);
    }
    console.log('=========================');
};