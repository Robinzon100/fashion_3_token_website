export const getVideoBlobObjectUrl = async (url): Promise<string> => {
    const res = await fetch(url)
    const blob = await res.blob()
    return URL.createObjectURL(blob)
}