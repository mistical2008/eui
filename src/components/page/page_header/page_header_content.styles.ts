/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { css } from '@emotion/react';
import { UseEuiTheme } from '../../../services';

export const euiPageHeaderContentStyles = ({ euiTheme }: UseEuiTheme) => ({
  euiPageHeaderContent: css`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  `,

  // alignItems
  top: css`
    align-items: flex-start;
  `,
  bottom: css`
    align-items: flex-end;
  `,
  center: css`
    align-items: center;
  `,
  stretch: css`
    align-items: stretch;
  `,

  // Children only (legacy) expects EuiPageHeaderSections as children
  flex: css`
    flex-direction: row;
    display: flex;
    gap: ${euiTheme.size.base};
    justify-content: space-between;
  `,

  // Responsive (what to do at the smaller breakpoint)
  responsive: css`
    flex-direction: column;
    align-items: flex-start;
  `,
  responsiveReverse: css`
    flex-direction: column-reverse;
    align-items: flex-start;
  `,

  // Content
  euiPageHeaderContent__titleIcon: css`
    inset-block-start: -${euiTheme.size.xs};
    position: relative;
    margin-inline-end: ${euiTheme.size.base};
  `,
});
