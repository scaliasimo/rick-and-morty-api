import React from "react";
import {
  // ToggleFilters,
  Input,
  SearchWrapper,
  // Icon,
  // FiltersTextToggle,
  // FiltersIcons,
  FiltersWrapper,
  FiltersDiv,
  H1,
  PWrapper,
  P,
} from "./styles";
// import OpenFiltersIconSVG from "./assets/Open.svg";
// import CloseFiltersIconSVG from "./assets/Close.svg";

const Search = ({ setSearch, dropdown, setDropdown }) => {
  // const toggleDropdown = () => {
  //   setDropdown(!dropdown);
  // };

  return (
    <>
      <SearchWrapper>
        {/* <ToggleFilters>
          <FiltersIcons>
            <FiltersTextToggle onClick={toggleDropdown}>
              FILTERS
            </FiltersTextToggle>
            <Icon
              src={OpenFiltersIconSVG}
              alt="Filters Icon"
              style={{ cursor: "pointer" }}
              className={dropdown ? "hide" : "show"}
              onClick={toggleDropdown}
            />
            <Icon
              src={CloseFiltersIconSVG}
              alt="Filters Icon"
              style={{ cursor: "pointer" }}
              className={dropdown ? "show" : "hide"}
              onClick={toggleDropdown}
            />
          </FiltersIcons>
        </ToggleFilters> */}
        <Input
          placeholder="Search a character"
          onChange={(event) => setSearch(event.target.value)}
        />
      </SearchWrapper>

      <FiltersWrapper>
        <FiltersDiv className={dropdown ? "show" : "hide"}>
          <H1>Gender</H1>
          <PWrapper>
            <P>MALE</P>
            <P>FEMALE</P>
            <P>GENDERLESS</P>
            <P>UNKNOWN</P>
          </PWrapper>

          <H1>Status</H1>
          <PWrapper>
            <P>ALIVE</P>
            <P>DEAD</P>
            <P>UNKNOWN</P>
          </PWrapper>

          <H1>Species</H1>
          <PWrapper>
            <P>HUMAN</P>
            <P>ALIEN</P>
            <P>MYTHOLOGICAL CREATURE</P>
          </PWrapper>
        </FiltersDiv>
      </FiltersWrapper>
    </>
  );
};

export default Search;
