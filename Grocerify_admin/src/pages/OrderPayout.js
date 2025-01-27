import React from "react";
import { TiExportOutline } from "react-icons/ti";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaEye } from "react-icons/fa";
// button Links from mui
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// date picker imported links from mui
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DashboardCard from "../components/DashboardCard";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineDeliveryDining } from "react-icons/md";

const dashboardData = [
  {
    temId: 1,
    icon: MdOutlineDeliveryDining,
    title: "Delivered Orders",
    value: 13,
    color: "pink",
  },
  {
    temId: 2,
    icon: GiReceiveMoney,
    title: "Revenue",
    value: "₹6914.98",
    color: "green",
  },
  {
    temId: 3,
    icon: GiReceiveMoney,
    title: "Total Sale(GMV)",
    value: "₹7079.98",
    color: "green",
  },
  {
    temId: 4,
    icon: GiTakeMyMoney,
    title: "My Earning",
    value: "₹81.03",
    color: "yellow",
  },
];


// temp data
const fakeData = [
  {
    orderId: "ORD001",
    orderDelivered: "Yes",
    store: "Store A",
    customers: "Customer A",
    address: "123 Street, City",
    total:456.90,
    orderStatus: "Delivered",
    runners: "Runner A",
  },
  {
    orderId: "ORD002",
    orderDelivered: "No",
    store: "Store B",
    customers: "Customer B",
    address: "456 Road, Town",
    total:678.65,
    orderStatus: "Pending",
    runners: "Runner B",
  },
  // Add more fake data as needed
];


const OrderPayout = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {dashboardData.map((item, index) => (
          <div key={index} className="col-span-1 p-4">
            <DashboardCard item={item} />
          </div>
        ))}
        </div>
    {/* <Stack direction="row" spacing={4}>
    <Button href="#text-buttons" color="error" className="gap-2" style={{ fontWeight: 'bold' }}>
      <TiExportOutline className="text-3xl" /> Export Data
    </Button>
    <Button href="#text-buttons" color="error" className="gap-2" style={{ fontWeight: 'bold' }}>
      <TiExportOutline className="text-3xl " />Previous Export Data
    </Button>
        </Stack> */}


  <div className="flex gap-4 items-center mb-4">
    <div className="flex justify-end pr-4">
      <div className="flex items-center border rounded px-2 py-1 mr-4">
        <input
          type="text"
          placeholder="Search..."
          className="border-none text-gray-400 outline-none focus:ring-0 bg-transparent"
        />
      </div>
    </div>
    <div className="relative w-64">
      <select className="border rounded-md w-full py-2 pl-3 pr-10 text-gray-600 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        <option value="all">- Select Store -</option>
        <option value="all">-ALL-</option>
        <option value="moodychef">The Moody Chef</option>
      </select>
    </div>
    <div className="relative w-64">
      <select className="border rounded-md w-full py-2 pl-3 pr-10 text-gray-600 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        <option value="all">- All -</option>
        <option value="due">Due</option>
        <option value="processing">Processing</option>
        <option value="rejected">Rejected</option>
        <option value="cancel">Cancel</option>
        <option value="readytopick">Ready to be Picked</option>
        <option value="ontheway">On the Way</option>
        <option value="delivered">Delievered</option>
      </select>
    </div>
  </div>
  <div className="flex gap-4 items-center mb-4">
    <div className="w-64">
      <select className="border rounded-md bg-white w-full py-2 pl-3 pr-10 text-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        <option value="alloperatingzone">-ALL OPERATING ZONES-</option>
        <option value="sector37">Sector 37</option>
        <option value="chandigarh">Chandigarh</option>
        <option value="zone1sector15">Zone 1 (Sector 1-5)</option>
      </select>
    </div>
    {/* Date Picker */}
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]} style={{ marginRight: '10px' }}>
        <DatePicker label="Date From" />
      </DemoContainer>
    </LocalizationProvider>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]} style={{ marginRight: '10px' }}>
        <DatePicker label="Date Till" />
      </DemoContainer>
    </LocalizationProvider>
    <Button variant="outlined" color="error">Go</Button>
    <Button variant="outlined" color="error">Reset</Button>
  </div>
      <div className="bottom">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow style={{color:'grey'}}>
                <TableCell style={{color:'red'}}>ORDER ID</TableCell>
                <TableCell  style={{color:'red'}}>ORDER DELIVERED</TableCell>
                <TableCell >STORE</TableCell>
                <TableCell >CUSTOMERS</TableCell>
                <TableCell >ADDRESS</TableCell>
                <TableCell >TOTAL(₹)</TableCell>
                <TableCell  style={{color:'red'}}>ORDER STATUS</TableCell>
                <TableCell >RUNNERS</TableCell>
                <TableCell >ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fakeData.map((data , index) => (
                <TableRow
                  key={data.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell color="error">{data.orderId}</TableCell>
                    <TableCell  color="error">{data.orderDelivered}</TableCell>
                    <TableCell >{data.store}</TableCell>
                    <TableCell >{data.customers}</TableCell>
                    <TableCell >{data.address}</TableCell>
                    <TableCell >{data.total} COD</TableCell>
                    <TableCell  color="error">{data.orderStatus}</TableCell>
                    <TableCell >{data.runners}</TableCell>
                    <TableCell ><FaEye/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default OrderPayout;
