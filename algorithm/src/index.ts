import { NeedCandyForUp, BonusCandy, BonusXP } from './constants';

/**
 * 진화 총 경험치 구하기
 * @param pikachu 피카츄 마리수
 * @param candy 사탕 개수
 */
export default function solution(pikachu: number, candy: number): number {
    const canRaichuCnt = upPikachu(candy);
    if (pikachu < canRaichuCnt) return pikachu * BonusXP;
    return canRaichuCnt * BonusXP;
}

/**
 * 진화 총 경험치 구하기 with arr
 * @param args args[0] 피카츄 마라수 args[1] 사탕 개수 max length 2
 */
export function solutionWithArr(args: number[]): number {
    if (args.length !== 2) throw new Error('out of length');
    const canRaichuCnt = upPikachu(args[1]);
    if (args[0] < canRaichuCnt) return args[0] * BonusXP;
    return canRaichuCnt * BonusXP;
}

/**
 * 사탕으로 가능 라이츄 마리수 구하기 (재귀함수)
 * @param candy 사탕 개수
 */
function upPikachu(candy: number): number {
    const raichu = Math.floor(candy / NeedCandyForUp);
    if (raichu <= 0) return raichu;
    return raichu + upPikachu(candy - (NeedCandyForUp * raichu) + raichu * BonusCandy);
}