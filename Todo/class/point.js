class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    print() {
        console.log(`현재 좌표는 ${this.x}, ${this.y}입니다`);
    }

    static distance(p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;

        return Math.hypot(dx, dy);
        // hypot은 넣어진 매개변수를 전부 제곱해서 더한 후에 제곱근을 구해주는 함수
        // Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
    }
}