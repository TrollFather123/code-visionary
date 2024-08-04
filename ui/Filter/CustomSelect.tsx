/* eslint-disable react/destructuring-assignment */
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectProps } from "@mui/material/Select";

const CustomSelectWrapper = styled(Select)`
  &.MuiOutlinedInput-root {
    background-color: transparent;
    padding: 14px 0;
    width: 100%;
    border-radius: 0;
    border-bottom: 1px solid ${primaryColors.textPrimaryColor};
    min-width: 130px;
    height: 36px;
    .MuiSelect-select {
      padding: 0;
      /* padding-right: 40px; */
      color: ${primaryColors.textPrimaryColor};
      font-size: 20px;
      font-weight: 400;
      text-align: left;
    }
    fieldset {
      display: none;
      border-bottom: 1px solid ${primaryColors.textPrimaryColor};
    }
    .MuiSelect-icon {
      padding: 0;
      line-height: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .menu_item {
    &.MuiMenuItem-root {
      color: ${primaryColors.textPrimaryColor};
    }
  }
`;
interface CustomSelectProps extends SelectProps {}
const CustomSelect: React.FC<CustomSelectProps & SelectProps> = ({
  ...props
}) => {
  const MenuProps = {
    PaperProps: {
      style: {
        width: "auto"
        // backgroundColor:"#000"
      }
    }
  };

  return (
    <CustomSelectWrapper
      displayEmpty
      input={<OutlinedInput />}
      IconComponent={props?.IconComponent}
      MenuProps={MenuProps}
      inputProps={{ "aria-label": "Without label" }}
      // className={props.className}
      {...props}
    >
      {/* {dataset.map((name) => (
        <MenuItem key={name} value={name} className="menu_item">
          {name}
        </MenuItem>
      ))} */}
      {props.children}
    </CustomSelectWrapper>
  );
};

export default CustomSelect;
