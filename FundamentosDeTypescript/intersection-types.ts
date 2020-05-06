interface Interface3 {
	prop3: number;
}

interface Interface4 {
	prop4: number;
	prop5: string;
}

interface Interface5 {
	prop6: boolean;
}

type InterfaceMix2 = Interface3 & Interface4 & Interface5;

const InterfaceMix2: InterfaceMix2 = {
	prop3: 13,
	prop4: 92,
	prop5: 'Dospa',
	prop6: true,
};
