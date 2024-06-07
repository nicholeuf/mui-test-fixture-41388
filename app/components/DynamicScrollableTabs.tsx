'use client';

import * as React from 'react';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

const DynamicScrollableTabs = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const tabLabels = [
    'Item One',
    'Item Two',
    'Item Three',
    'Item Four',
    'Item Five',
    'Item Six',
    'Item Seven',
    'Item Eight',
    'Item Nine',
    'Item Ten',
  ];
  return (
    <Container maxWidth="sm">
      <Box sx={{ width: '100%', m: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            onChange={handleChange}
            value={value}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            selectionFollowsFocus
          >
            {tabLabels.map((label, index) => (
              <Tab
                key={`tab-${index}`}
                label={label}
                id={`dynamic-tab-${index}`}
                aria-controls={`dynamic-tabpanel-${index}`}
              />
            ))}
          </Tabs>
        </Box>
        {tabLabels.map((label, index) => {
          return (
            <Box
              key={`tab-panel-${index}`}
              role="tabpanel"
              hidden={value !== index}
              id={`dynamic-tabpanel-${index}`}
              aria-labelledby={`dynamic-tab-${index}`}
            >
              {value === index && (
                <Box sx={{ p: 3 }}>
                  <p>{label}</p>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default DynamicScrollableTabs;
