export interface FormInputState {
	name: string;
	phone: string;
	services: Service[];
	errorMessages: string[];
}

export interface ServicePayload {
	id: number;
	checked: boolean;
}

export interface Service {
	id: number;
	name: string;
	checked: boolean;
}
