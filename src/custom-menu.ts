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
import { hello } from './example-module';
import { getExample } from './request';
import { writeApiResponseByCell } from './sheet';

export function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('GASボタンリスト')
    .addItem('Helloを表示', 'dispHello')
    .addItem('dispGetAPIを表示', 'dispGetAPI')
    .addItem('セルの値よりリクエストdispGetAPIの結果を出力', 'outputCellValue')
    .addToUi();
}

export function dispHello() {
  disp(hello(), `${hello()}!!`);
}

export function dispGetAPI() {
  const example = getExample();
  disp(example.title, example.body);
}

export function outputCellValue() {
  writeApiResponseByCell();
}

function disp(title: string, message: string) {
  return SpreadsheetApp.getUi().showModalDialog(
    HtmlService.createHtmlOutput(message).setWidth(300).setHeight(100),
    title
  );
}
