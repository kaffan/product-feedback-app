import { List, ListItem, ListItemText } from "@mui/material";
import { Card } from "../common/CommonStyles";
import CircleIcon from "@mui/icons-material/Circle";

export const Roadmap = () => {
  return (
    <Card>
      <List sx={{ padding: "14px" }}>
        <ListItem>
          <ListItemText sx={{ color: "#3A4374", flexGrow: "2" }}>
            <span style={{ fontWeight: "bolder" }}>Roadmap</span>
          </ListItemText>
          <ListItemText
            sx={{ color: "blue", flexGrow: "0.5", textDecoration: "underline" }}
          >
            <span style={{ fontSize: "10px", fontWeight: "bolder" }}>View</span>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText sx={{ flexGrow: "2" }}>
            {/* <span
              style={{
                borderRadius: "50%",
                backgroundColor: "#F49F85",
                display: 'inline-block',
                height: '25px',
                paddingRight: "10px",
                width: '25px'
              }}
            ></span> */}
            <CircleIcon sx={{ color: "#F49F85", fontSize: "12px" }} />
            <span style={{ color: "#647196", paddingLeft: "14px" }}>
              Planned
            </span>
          </ListItemText>
          <ListItemText sx={{ flexGrow: "0.5", color: "black" }}>
            2
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText sx={{ flexGrow: "2" }}>
            {/* <span
              style={{
                borderRadius: "50%",
                backgroundColor: "#AD1FEA",
                display: 'inline-block',
                height: '25px',
                paddingRight: "10px",
                width: '25px'
              }}
            ></span> */}
            <CircleIcon sx={{ color: "#AD1FEA", fontSize: "12px" }} />
            <span style={{ color: "#647196", paddingLeft: "14px" }}>
              In - progress
            </span>
          </ListItemText>
          <ListItemText sx={{ color: "black", flexGrow: "0.5" }}>
            3
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText sx={{ flexGrow: "2" }}>
            {/* <span
              style={{
                borderRadius: "50%",
                backgroundColor: "#62BCFA",
                display: 'inline-block',
                height: '25px',
                paddingRight: "10px",
                width: '25px'
              }}
            ></span> */}
            <CircleIcon sx={{ color: "#62BCFA", fontSize: "14px" }} />
            <span style={{ color: "#647196", paddingLeft: "14px" }}>Live</span>
          </ListItemText>
          <ListItemText sx={{ color: "black", flexGrow: "0.5" }}>
            1
          </ListItemText>
        </ListItem>
      </List>
    </Card>
  );
};
