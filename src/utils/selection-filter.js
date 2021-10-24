export default function selectionFilter({ series, films }) {
    return {
        series: [
            {
                title: "KOREA",
                data: series?.filter((item) => item.genre === "korea")
            },
            {
                title: "ETC",
                data: series?.filter((item) => item.genre === "etc")
            },
            {
                title: "POP",
                data: series?.filter((item) => item.genre === "pop")
            },
            {
                title: "KIDS",
                data: series?.filter((item) => item.genre === "kids")
            },
            {
                title: "Original",
                data: series?.filter((item) => item.genre === "original")
            }
        ],
        films: [
            {
                title: "KOREA",
                data: films?.filter((item) => item.genre === "korea")
            },
            {
                title: "POP",
                data: films?.filter((item) => item.genre === "pop")
            },
            {
                title: "REPLAY",
                data: films?.filter((item) => item.genre === "replay")
            },
            {
                title: "ETC",
                data: films?.filter((item) => item.genre === "etc")
            },
            {
                title: "kids",
                data: films?.filter((item) => item.genre === "kids")
            }
        ]
    };
}