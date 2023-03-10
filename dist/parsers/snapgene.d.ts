import { ParseOptions, Seq } from "..";
/**
 * Parse a Snapgene file to Seq[]
 *
 * this is adapted from https://github.com/TeselaGen/ve-sequence-parsers/blob/master/src/parsers/snapgeneToJson.js
 * which was adapted from https://github.com/IsaacLuo/SnapGeneFileReader/blob/master/snapgene_reader/snapgene_reader.py
 */
declare const _default: (options?: ParseOptions) => Promise<Seq[]>;
export default _default;
