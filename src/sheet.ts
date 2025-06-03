/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { getExampleById } from './request';

export function writeApiResponseByCell(): void {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  // カーソルがあるセルを取得
  const cell = sheet.getActiveCell();
  const value: string = cell.getValue();
  // セルの値が数値であることを確認)
  const numberValue = /^\d+$/.test(value) ? parseInt(value, 10) : 1;

  const response = getExampleById(numberValue);
  // レスポンスデータをセルにセットする変数を作成
  const setValues = [[response.title, response.body]];
  sheet
    // 取得したセルの行と列を基準に、右隣のセルに値をセット(getRangeの引数は行, 列, 行数, 列数)
    .getRange(cell.getRow(), cell.getColumn() + 1, 1, setValues[0].length)
    .setValues(setValues);
}
