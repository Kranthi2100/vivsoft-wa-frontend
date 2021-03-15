import Styled from "styled-components";
import { line, scaleLinear } from "d3";
import { useCallback } from "react";

function LineGraph(props) {
  const lineGenerator = useCallback(
    (data) =>
      line()
        .x((x, index) => index * 32.4 + 5)
        .y((y, index) => y.temp_f * -4.5)(data),
    []
  );

  return (
    <LineGraphContainer>
      <StyledSVG>
        <g>
          <path
            d={lineGenerator(props.data)}
            stroke="red"
            stroke-width="2"
            stroke-dasharray="10 10"
          />
          {new Array(5).fill(null).map((_, index) => (
            <>
              <text
                transform={`translate(-10, ${index * -90 + 5})`}
                key={index + "text"}
              >
                {index * 20}
              </text>
              <path
                key={index + "path"}
                d={`M10 ${index * -90} 750 ${index * -90}`}
                stroke-width="1"
                stroke="#cccccc33"
              />
            </>
          ))}
          {["0000", "06:00", "12:00", "18:00", "00:00"].map((_, index) => {
            return (
              <>
                <text transform={`translate(${index * 187} 30) rotate(45)`}>
                  {_}
                </text>
              </>
            );
          })}
        </g>
      </StyledSVG>
    </LineGraphContainer>
  );
}

const StyledSVG = Styled.svg`
  background: #2D3142;
  width: 800px;
  height: 480px;

  box-shadow: 0.1rem 0.1rem 0.2rem #1D1E20;

  g {
    transform: translate(25px, 400px);

    path {
      fill: transparent;
    }

    text {
      fill: white;
    }
  }
`;

const LineGraphContainer = Styled.div`
  width: 100%; height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LineGraph;
