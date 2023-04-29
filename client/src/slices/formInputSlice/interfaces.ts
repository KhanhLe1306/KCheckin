export interface FormInputState {
	name: string;
	phone: string;
	services: Service[];
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
