import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell, { tableCellClasses } from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {date2convert} from './../../services/jalali';
import Filepreview from './../Admin/filePreview.component';
import { styled } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {Link} from 'react-router-dom';

export default function DenseTable(props) {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
          fontFamily:'Yekan',
          textAlign:'center'
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
          fontFamily:'Yekan',textAlign:'center'
        },
      }));
      function nextPath(path,props) {
        props.history.push(path);
      }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <StyledTableCell align="left">فایل</StyledTableCell>
            <StyledTableCell >نام</StyledTableCell>
            <StyledTableCell>قیمت</StyledTableCell>
            <StyledTableCell align="left">تاریخ</StyledTableCell>
            <StyledTableCell align="left">وضعیت</StyledTableCell>
            <StyledTableCell align="left">حذف</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {props.rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell sx={{maxWidth:100}} align="right"><Link to={'/picture/'+row.id}><Filepreview   src={row.filePath}></Filepreview></Link></StyledTableCell>
              <StyledTableCell >
                {row.formname}
              </StyledTableCell>
              <StyledTableCell align="right">{row.formprice}</StyledTableCell>
              <StyledTableCell align="right">{date2convert(row.createDate)}</StyledTableCell>
              <StyledTableCell align="right">{row.formdescription}</StyledTableCell>
              <StyledTableCell onClick={()=>props.deleteRow(row.id)} align="right"><DeleteForeverIcon sx={{color:'red'}} ></DeleteForeverIcon></StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}