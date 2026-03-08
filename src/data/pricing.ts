export type Level = 'primaria' | 'secundaria' | 'preuniversitario' | 'universitario';
export type PlanType = 'individual' | 'grupal';
export type PlanDuration = 'diario' | 'semanal' | 'mensual' | 'anual';

export interface IndividualPlan {
    diario: { pricePerHour: number };
    semanal: { price: number; hours: number; daysPerWeek: number };
    mensual: { price: number; hours: number; days: number };
    anual: { price: number; hoursPerMonth: number; months: number };
}

export interface GrupalPlan {
    diario: { pricePerHour: number };
    semanal: { pricePerHour: number; hours: number; note: string };
    mensual: { pricePerHour: number; hours: number; note: string };
}

export const levelLabels: Record<Level, string> = {
    primaria: 'Primaria',
    secundaria: 'Secundaria',
    preuniversitario: 'Pre-Universitario',
    universitario: 'Universitario',
};

export const levelDescriptions: Record<Level, string> = {
    primaria: '1° a 6° grado',
    secundaria: 'Hasta 3° de secundaria',
    preuniversitario: 'Desde 4° de secundaria',
    universitario: 'Nivel superior',
};

export const individualPricing: Record<Level, IndividualPlan> = {
    primaria: {
        diario: { pricePerHour: 15 },
        semanal: { price: 81, hours: 6, daysPerWeek: 3 },
        mensual: { price: 288, hours: 24, days: 12 },
        anual: { price: 2880, hoursPerMonth: 24, months: 12 },
    },
    secundaria: {
        diario: { pricePerHour: 17 },
        semanal: { price: 90, hours: 6, daysPerWeek: 3 },
        mensual: { price: 300, hours: 24, days: 12 },
        anual: { price: 3000, hoursPerMonth: 24, months: 12 },
    },
    preuniversitario: {
        diario: { pricePerHour: 20 },
        semanal: { price: 100, hours: 6, daysPerWeek: 3 },
        mensual: { price: 320, hours: 24, days: 12 },
        anual: { price: 3000, hoursPerMonth: 24, months: 12 },
    },
    universitario: {
        diario: { pricePerHour: 25 },
        semanal: { price: 120, hours: 6, daysPerWeek: 3 },
        mensual: { price: 350, hours: 24, days: 12 },
        anual: { price: 3400, hoursPerMonth: 24, months: 12 },
    },
};

export const grupalPricing: Record<Level, GrupalPlan> = {
    primaria: {
        diario: { pricePerHour: 12.5 },
        semanal: { pricePerHour: 10, hours: 6, note: 'Pago completo al inicio' },
        mensual: { pricePerHour: 8, hours: 24, note: 'Pago completo al inicio' },
    },
    secundaria: {
        diario: { pricePerHour: 13 },
        semanal: { pricePerHour: 10, hours: 6, note: 'Pago completo al inicio' },
        mensual: { pricePerHour: 8, hours: 24, note: 'Pago completo al inicio' },
    },
    preuniversitario: {
        diario: { pricePerHour: 13 },
        semanal: { pricePerHour: 10, hours: 6, note: 'Pago completo al inicio' },
        mensual: { pricePerHour: 8, hours: 24, note: 'Pago completo al inicio' },
    },
    universitario: {
        diario: { pricePerHour: 15 },
        semanal: { pricePerHour: 12, hours: 6, note: 'Pago completo al inicio' },
        mensual: { pricePerHour: 10, hours: 24, note: 'Pago completo al inicio' },
    },
};

export function calculateIndividualSavings(level: Level, plan: 'semanal' | 'mensual' | 'anual'): number {
    const daily = individualPricing[level].diario.pricePerHour;

    if (plan === 'anual') {
        const anualData = individualPricing[level].anual;
        const totalHours = anualData.hoursPerMonth * anualData.months;
        return daily * totalHours - anualData.price;
    }
    if (plan === 'mensual') {
        const mensualData = individualPricing[level].mensual;
        return daily * mensualData.hours - mensualData.price;
    }
    const semanalData = individualPricing[level].semanal;
    return daily * semanalData.hours - semanalData.price;
}


export function calculateGrupalSavings(level: Level, plan: 'semanal' | 'mensual'): number {
    const daily = grupalPricing[level].diario.pricePerHour;
    const planData = grupalPricing[level][plan];
    const savingsPerHour = daily - planData.pricePerHour;
    return savingsPerHour * planData.hours;
}

export const planDurationLabels: Record<string, string> = {
    diario: 'Plan Diario',
    semanal: 'Plan Semanal',
    mensual: 'Plan Mensual',
    anual: 'Plan Anual',
};
