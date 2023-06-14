import { Pagination as MuiPagination, PaginationItem } from '@mui/material';
import { pagintaionItems, pagination } from './paginationStyles';

export const Pagination = ({ onChange, page, count = 3 }) => {
  return (
    <MuiPagination
      page={page}
      count={count}
      variant="outlined"
      shape="rounded"
      size="large"
      color="secondary"
      onChange={onChange}
      sx={pagination}
      renderItem={item => <PaginationItem sx={pagintaionItems} {...item} />}
    />
  );
};
