import { useState } from 'react';
import { Button, Menu, MenuItem, Link } from '@mui/material';
import { KeyboardArrowDownOutlined } from '@mui/icons-material';
import { outlinedDarkButton } from 'shared/commonStyles';
import { button, menu, item } from './sourcesButtonStyles';

export const SourcesButton = ({ sources }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = !!anchorEl;

  const handleClick = e => setAnchorEl(e.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button
        id="basic-button"
        variant="outlined"
        aria-controls={isOpen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleClick}
        sx={{ ...outlinedDarkButton, ...button, bgcolor: isOpen && 'neutral.darker' }}
      >
        Sources <KeyboardArrowDownOutlined fontSize="small" sx={{ ml: '8px' }} />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
        sx={menu}
      >
        {sources.map(({ type, url }) => (
          <MenuItem key={url} component={Link} href={url} target="_blank" disabled={!url} sx={item}>
            {type}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
