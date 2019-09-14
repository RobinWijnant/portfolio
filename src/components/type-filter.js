// @flow
import * as React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import Color from "color"
import ProjectType from "./project-type"
import filterIcon from "../images/icons/filter.svg"

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-right: -10px;
  padding: 0;
`
const FilterIcon = styled.img`
  width: 20px;
  margin: -8px 10px 0 0;
`
const ListItem = styled.li`
  list-style-type: none;
  display: block;
  margin: 0 5px 10px;
`
const ProjectTypeStyled = styled(ProjectType)`
  cursor: pointer;
  transition: border 0.4s, background 0.4s;

  &:hover {
    background-color: ${styleVars.colors.grey[100]};
  }

  &.active {
    background-color: ${Color(styleVars.colors.blue)
      .lighten(0.32)
      .hex()};
    border-color: ${styleVars.colors.blue};
  }
`

type Props = {
  className?: string,
  onFilter: (selectedTypes: string[]) => void,
}

type State = {
  selectedTypes: string[],
}

class TypeFilter extends React.Component<Props, State> {
  state = {
    selectedTypes: [],
  }

  types: Array<string> = [
    "Design",
    "Website",
    "ML/AI",
    "CI/CD",
    "Web app",
    "Blockchain",
  ]

  toggleFilter(type: string) {
    let newSelectedTypes
    if (this.state.selectedTypes.includes(type)) {
      newSelectedTypes = this.state.selectedTypes.filter(item => item !== type)
    } else {
      newSelectedTypes = [...this.state.selectedTypes, type]
    }
    this.setState({ selectedTypes: newSelectedTypes })
    this.props.onFilter(newSelectedTypes)
  }

  render() {
    return (
      <List className={this.props.className}>
        <FilterIcon src={filterIcon} alt={"Filter icon"} />
        {this.types.map((type: string, index: number) => {
          return (
            <ListItem onClick={this.toggleFilter.bind(this, type)} key={index}>
              <ProjectTypeStyled
                className={
                  this.state.selectedTypes.includes(type) ? "active" : ""
                }
                size={1.08}
              >
                {type}
              </ProjectTypeStyled>
            </ListItem>
          )
        })}
      </List>
    )
  }
}

export default TypeFilter
