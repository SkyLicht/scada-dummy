type RobotArmProps = {
    armX: number;
    armY: number;
    armW: number;
    armH: number;
    baseSize: number;
    start: number;
    end: number;
    duration: string;
    baseColor: string;
    armColor: string;
};

export function renderRobotArm({
    armX,
    armY,
    armW,
    armH,
    baseSize,
    start,
    end,
    duration,
    baseColor,
    armColor,
}: RobotArmProps) {
    const pivotX = armX + armW / 2;
    const pivotY = armY + armH;

    const baseX = pivotX - baseSize / 2;
    const baseY = pivotY - baseSize / 2;

    return (
        <>
            <rect width={baseSize} height={baseSize} x={baseX} y={baseY} fill={baseColor} />

            <circle cx={pivotX} cy={pivotY} r={2.5} fill="black" />

            <rect width={armW} height={armH} x={armX} y={armY} fill={armColor}>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values={`
                        ${start} ${pivotX} ${pivotY};
                        ${end} ${pivotX} ${pivotY};
                        ${start} ${pivotX} ${pivotY}
                    `}
                    dur={duration}
                    repeatCount="indefinite"
                />
            </rect>
        </>
    );
}
