import classes from "../index.module.css";

interface LineToLineComparatorProps {
  content1: string[][];
  content2: string[][];
  mainColumn1?: number;
  mainColumn2?: number;
  sortedHeadersIndex1: number[];
  sortedHeadersIndex2: number[];
}

export const LineToLineComparator = ({
  content1,
  content2,
  mainColumn1,
  mainColumn2,
  sortedHeadersIndex1,
  sortedHeadersIndex2,
}: LineToLineComparatorProps) => {
  if (mainColumn1 == null || mainColumn2 == null) {
    return null;
  }

  return (
    <div>
      {content1.map((line, i) => {
        const compareLine = content2.find(
          (l) => l[mainColumn2] === line[mainColumn1]
        );
        return (
          <div key={line + "-" + i} className={classes.compareItem}>
            <table className={classes.dataTable}>
              <tbody>
                <tr>
                  {line.map((cell, j) => (
                    <td key={cell + "-" + j}>{cell}</td>
                  ))}
                </tr>
                {compareLine ? (
                  <tr>
                    {compareLine.map((cell, j) => (
                      <td key={cell + "-" + j}>{cell}</td>
                    ))}
                  </tr>
                ) : (
                  <tr>
                    {line.map((cell, j) => (
                      <td key={cell + "-" + j} />
                    ))}
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};
