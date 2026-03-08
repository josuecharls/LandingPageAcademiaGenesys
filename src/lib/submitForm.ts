const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzZOBDfO8CZkTVbPuOlURjd5delKD-0027D2FQ97WZrajSyUSoLGoPWGn9MkxTcR1ukJQ/exec';

export interface FormData {
    nombreApoderado: string;
    nombreEstudiante: string;
    celular: string;
    nivel: string;
    plan: string;
    tipo: string;
}

export async function submitToGoogleSheets(data: FormData): Promise<boolean> {
    try {
        // Build URL with query parameters — GET works reliably with Google Apps Script
        // (POST gets blocked with 401 due to CORS redirect issues)
        const params = new URLSearchParams();
        params.append('nombreApoderado', data.nombreApoderado);
        params.append('nombreEstudiante', data.nombreEstudiante);
        params.append('celular', data.celular);
        params.append('nivel', data.nivel);
        params.append('plan', data.plan);
        params.append('tipo', data.tipo);
        params.append('fecha', new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' }));

        const url = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;

        const response = await fetch(url, {
            method: 'GET',
            mode: 'no-cors',
        });

        // With no-cors mode, response is opaque but if no error was thrown it succeeded
        if (response.type === 'opaque' || response.ok) {
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);
        return false;
    }
}
