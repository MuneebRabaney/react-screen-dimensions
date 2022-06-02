import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type ButtonPresets = {
  presets: {
    loading?: 'loading' | null;
    primary?: 'active' | null;
    disabled?: 'disbaled' | null;
  };
};

type Props = {
  onclick?: any;
  title?: string | undefined;
  variant?: 'text' | 'outlined' | 'contained';
  preset?: 'loading' | 'disabled' | 'active' | string | undefined;
  disabled?: 'disabled' | string | boolean | undefined;
  children?: React.ReactNode | undefined;
};

export default function BasicButtons({
  variant,
  disabled,
  title = 'text',
  preset = 'active',
  ...props
}: Props) {
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={() => props?.onclick} title={title} variant={variant}>
        {props?.children}
      </Button>
    </Stack>
  );
}
