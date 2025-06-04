/**
 * 
    Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
    Output: [[2,2,2],[2,2,0],[2,0,1]]
 *
 */

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    if(image[sr][sc] === color)
        return image;

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const prevColor = image[sr][sc];

    image[sr][sc] = color;
    for(const [dr, dc] of directions) {
        if(image[sr + dr]?.[sc + dc] === prevColor)
            floodFill(image, sr + dr, sc + dc, color);
    }

    return image;
};