
import { useTheme } from '@/contexts/ThemeContext';

type ColorSwatch = {
  name: string;
  value: string;
  textColor?: string;
};

const paletteColors = {
  main: [
    { name: 'Dark - Black', value: 'rgb(0, 0, 0)', textColor: 'white' },
    { name: 'Dark Gray', value: 'rgb(18, 18, 18)', textColor: 'white' },
    { name: 'Gray', value: 'rgb(30, 30, 29)', textColor: 'white' },
    { name: 'Gold/Amber', value: 'rgb(189, 159, 101)', textColor: 'black' },
    { name: 'Gold/Amber (Alpha)', value: 'rgb(206, 185, 142, 0.827)', textColor: 'black' },
    { name: 'Off White', value: 'rgb(250, 249, 246)', textColor: 'black' },
    { name: 'Pure White', value: 'rgb(255, 255, 255)', textColor: 'black' },
  ],
  accent: [
    { name: 'Blue Gray', value: 'rgb(111, 131, 159)', textColor: 'white' },
    { name: 'Purple', value: 'rgb(137, 121, 160)', textColor: 'white' },
    { name: 'Green', value: 'rgb(52, 137, 92)', textColor: 'white' },
    { name: 'Link Blue', value: 'rgb(0, 0, 238)', textColor: 'white' },
  ],
  transparencies: [
    { name: 'Dark Gray 50%', value: 'rgb(18, 18, 18, 0.5)', textColor: 'white' },
    { name: 'Dark Gray 60%', value: 'rgb(18, 18, 18, 0.6)', textColor: 'white' },
    { name: 'Dark Gray 90%', value: 'rgb(18, 18, 18, 0.9)', textColor: 'white' },
    { name: 'Off White 50%', value: 'rgb(250, 249, 246, 0.5)', textColor: 'black' },
    { name: 'Off White 70%', value: 'rgb(250, 249, 246, 0.7)', textColor: 'black' },
    { name: 'Off White 90%', value: 'rgb(250, 249, 246, 0.9)', textColor: 'black' },
  ]
};

export const ColorSwatch = ({ color }: { color: ColorSwatch }) => {
  return (
    <div className="flex flex-col">
      <div 
        className="h-24 w-full rounded-md border border-border shadow-sm mb-2" 
        style={{ backgroundColor: color.value }}
      />
      <div className="text-sm font-medium">{color.name}</div>
      <div className="text-xs font-mono">{color.value}</div>
    </div>
  );
};

export const ColorPaletteShowcase = () => {
  const { theme } = useTheme();
  
  return (
    <div className="space-y-8 py-6">
      <section>
        <h2 className="heading-2 mb-4">Color Palette</h2>
        <p className="body-md mb-6">
          This showcases the color palette derived from the Sketch palette file.
        </p>
      </section>
      
      <section>
        <h3 className="heading-3 mb-3">Main Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {paletteColors.main.map((color) => (
            <ColorSwatch key={color.name} color={color} />
          ))}
        </div>
      </section>
      
      <section className="mt-8">
        <h3 className="heading-3 mb-3">Accent Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {paletteColors.accent.map((color) => (
            <ColorSwatch key={color.name} color={color} />
          ))}
        </div>
      </section>
      
      <section className="mt-8">
        <h3 className="heading-3 mb-3">Transparency Variations</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {paletteColors.transparencies.map((color) => (
            <ColorSwatch key={color.name} color={color} />
          ))}
        </div>
      </section>
      
      <section className="mt-12 p-6 card">
        <h3 className="heading-3 mb-4 accent-element">Theme Variables</h3>
        <div className="space-y-6">
          <div>
            <h4 className="heading-4 mb-2">Current Theme: {theme === 'light' ? 'Light' : 'Dark'}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: 'var(--background)' }} />
                <span className="text-sm">--background</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: 'var(--foreground)' }} />
                <span className="text-sm">--foreground</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: 'var(--primary)' }} />
                <span className="text-sm">--primary</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: 'var(--secondary)' }}></div>
                <span className="text-sm">--secondary</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: 'var(--accent)' }}></div>
                <span className="text-sm">--accent</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: 'var(--highlight)' }}></div>
                <span className="text-sm">--highlight</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: 'var(--muted)' }}></div>
                <span className="text-sm">--muted</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: 'var(--border)' }}></div>
                <span className="text-sm">--border</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColorPaletteShowcase;
