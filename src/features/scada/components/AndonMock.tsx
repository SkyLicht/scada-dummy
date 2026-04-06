import { useEffect, useRef, useState } from "react";
import { Siren } from "lucide-react";

type AndonLine = "J01" | "J02" | "J03";

type AndonEvent = {
    id: string;
    machine: string;
    line: AndonLine;
    problem: string;
    elapsedSeconds: number;
    lifetimeSeconds: number;
};

const MACHINE_POOL = [
    {
        machine: "FZ1",
        line: "J01" as const,
        problems: ["Nozzle error", "Feeder empty", "Pickup fail"],
    },
    {
        machine: "FZ2",
        line: "J01" as const,
        problems: ["Vision mark fail", "Component miss", "Feeder jam"],
    },
    {
        machine: "GKG1",
        line: "J02" as const,
        problems: ["Alignment fail", "Paste low", "Stencil clean"],
    },
    {
        machine: "GKG2",
        line: "J02" as const,
        problems: ["Squeegee pressure", "Board detect fail", "Paste offset"],
    },
    {
        machine: "AOI1",
        line: "J02" as const,
        problems: ["Vision fail", "Camera timeout", "False call high"],
    },
    {
        machine: "AOI2",
        line: "J03" as const,
        problems: ["Inspection error", "Lighting fail", "Program mismatch"],
    },
    {
        machine: "FZ3",
        line: "J03" as const,
        problems: ["Pickup fail", "Nozzle clog", "Reject track full"],
    },
];

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const pickRandom = <T,>(items: T[]): T => items[Math.floor(Math.random() * items.length)];

const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const createRandomAlarm = (id: number, current: AndonEvent[]): AndonEvent => {
    const usedMachines = new Set(current.map((item) => item.machine));
    const availableMachines = MACHINE_POOL.filter((item) => !usedMachines.has(item.machine));
    const source =
        availableMachines.length > 0 ? pickRandom(availableMachines) : pickRandom(MACHINE_POOL);

    return {
        id: String(id),
        machine: source.machine,
        line: source.line,
        problem: pickRandom(source.problems),
        elapsedSeconds: randomInt(5 * 60, 15 * 60),
        lifetimeSeconds: randomInt(1 * 60, 5 * 60),
    };
};

const createInitialEvents = (): AndonEvent[] => {
    const result: AndonEvent[] = [];
    for (let i = 1; i <= 5; i += 1) {
        result.push(createRandomAlarm(i, result));
    }
    return result.sort((a, b) => b.elapsedSeconds - a.elapsedSeconds);
};

export const AndonMock = () => {
    const [events, setEvents] = useState<AndonEvent[]>(() => createInitialEvents());
    const nextIdRef = useRef(6);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setEvents((prev) => {
                let next = prev
                    .map((event) => ({
                        ...event,
                        elapsedSeconds: event.elapsedSeconds + 1,
                        lifetimeSeconds: event.lifetimeSeconds - 1,
                    }))
                    .filter((event) => event.lifetimeSeconds > 0);

                while (next.length < 5) {
                    next.push(createRandomAlarm(nextIdRef.current, next));
                    nextIdRef.current += 1;
                }

                next.sort((a, b) => b.elapsedSeconds - a.elapsedSeconds);
                return next;
            });
        }, 1000);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <div className="flex h-full w-full gap-1 overflow-x-auto">
            {events.map((event) => (
                <div
                    key={event.id}
                    className="flex h-full min-w-[130px] w-[130px] flex-col justify-between rounded-xl bg-red-900 px-2 py-1.5"
                >
                    <div className="flex items-center justify-between">
                        <span className="truncate  font-bold text-neutral-100">
                            {event.machine}
                        </span>
                        <span className=" font-semibold text-neutral-200">{event.line}</span>
                    </div>

                    <div className="line-clamp-2 text-sm leading-tight text-neutral-100">
                        {event.problem}
                    </div>

                    <div className="flex items-center gap-1 text-red-100">
                        <Siren />
                        <span className="text-xl font-bold">
                            {formatTime(event.elapsedSeconds)}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};
