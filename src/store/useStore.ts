import { create } from 'zustand';
import type { Level, PlanType, PlanDuration } from '../data/pricing';

interface StoreState {
    selectedLevel: Level | null;
    selectedPlanType: PlanType;
    selectedPlan: PlanDuration | null;
    setSelectedLevel: (level: Level) => void;
    setSelectedPlanType: (type: PlanType) => void;
    setSelectedPlan: (plan: PlanDuration) => void;
    reset: () => void;
}

export const useStore = create<StoreState>((set) => ({
    selectedLevel: null,
    selectedPlanType: 'individual',
    selectedPlan: null,
    setSelectedLevel: (level) => set({ selectedLevel: level, selectedPlan: null }),
    setSelectedPlanType: (type) => set({ selectedPlanType: type, selectedPlan: null }),
    setSelectedPlan: (plan) => set({ selectedPlan: plan }),
    reset: () => set({ selectedLevel: null, selectedPlanType: 'individual', selectedPlan: null }),
}));
