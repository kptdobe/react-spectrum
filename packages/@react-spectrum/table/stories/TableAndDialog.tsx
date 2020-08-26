/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {Cell, Column, Row, Table, TableBody, TableHeader} from '../';
import {Flex} from '@react-spectrum/layout';
import { Button, ActionButton } from '@react-spectrum/button'
import { DialogTrigger, Dialog } from '@react-spectrum/dialog'
import { Heading } from '@react-spectrum/text'
import { Content } from '@react-spectrum/view'
import { Divider } from '@react-spectrum/divider'
import React from 'react';

export function TableAndDialog() {
  return (
      <Table aria-label="Results"  width={500}>
        <TableHeader>
          <Column>Column 0</Column>
          <Column>Action</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>Some data</Cell>
            <Cell>
              <DialogTrigger type="fullscreenTakeover">
                <ActionButton>Open the dialog</ActionButton>
                  {(close) => (
                    <Dialog>
                      <Heading>Title</Heading>
                      <Divider />
                      <Content>
                        <Flex direction="column">
                          <div>Some content that cannot be selected!!</div>
                          <Button alignSelf="center" variant="cta" onPress={close}>Close</Button>
                        </Flex>
                      </Content>
                    </Dialog>
                  )}
              </DialogTrigger>
            </Cell>
          </Row>
        </TableBody>
      </Table>
  );
}
