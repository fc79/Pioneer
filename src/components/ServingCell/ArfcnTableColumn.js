export const ArfcnTableColumns = [
  {
    title: "C",
    dataIndex: "color",
    align: "center",
    // fixed: "left",
    width: "10px",
    render: (text, record) => {
      return (
        <div
          style={{
            backgroundColor: record.color,
            width: "20px",
            height: "20px",
            borderRadius: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />

        // children: record.status?.state[0],
      );
    },
  },
  {
    title: "Freq",
    dataIndex: "arfcn",

    align: "center",
    width: "10px",
  },
  {
    title: "Lifetime",
    dataIndex: "life_time",
    align: "center",

    width: "10px",
  },

  {
    title: "Count",
    dataIndex: "count",
    align: "center",

    width: "10px",
  },
  {
    title: "Dist",
    dataIndex: "dist",
    align: "center",

    width: "10px",
  },
];
