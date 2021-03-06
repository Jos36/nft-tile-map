export type Coord = {
  x: number;
  y: number;
};

export type Layer = (x: number, y: number) => Tile | null;

export type Tile = {
  color: string;
  top?: boolean;
  left?: boolean;
  topLeft?: boolean;
  scale?: number;
  owner?: string;
  type?: number;
  image?: string;
  estateId?: number;
  price?: number;
  landId?: number;
  zone?: number;
  isHighTraffic?: boolean;
  billboard?: string;
};
