
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, AreaChart } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-4 md:p-10 space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center">🌍 Economic & Commodities Dashboard</h1>
      <p className="text-center text-gray-600">Track real-time prices, markets, and macroeconomic trends.</p>

      <Tabs defaultValue="gold" className="w-full">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="gold">Gold</TabsTrigger>
          <TabsTrigger value="oil">Oil</TabsTrigger>
          <TabsTrigger value="wheat">Wheat</TabsTrigger>
          <TabsTrigger value="summary">📊 Market Summary</TabsTrigger>
        </TabsList>

        <TabsContent value="gold">
          <Card className="bg-yellow-50">
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">🪙 Gold Price</h2>
              <p>Live price, charts, and historical trends will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="oil">
          <Card className="bg-orange-50">
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">🛢 Crude Oil Price</h2>
              <p>Live crude oil trends and analysis will be shown here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wheat">
          <Card className="bg-green-50">
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">🌾 Wheat Prices</h2>
              <p>Real-time wheat market prices and data here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="summary">
          <Card className="bg-blue-50">
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">📈 Global Stock Market Summary</h2>
              <p>Overview of Nifty, Sensex, Nasdaq, and more.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
        <h2 className="text-2xl font-bold">🧠 Yash's Economic Insights</h2>
        <p className="text-gray-700">This is your space to share analysis on gold trends, oil supply, inflation, etc.</p>
        <ul className="list-disc list-inside text-gray-600">
          <li>How inflation and Fed decisions affect gold prices</li>
          <li>How geopolitics is shaping wheat exports from Russia/Ukraine</li>
          <li>Why oil prices rise when OPEC cuts output</li>
        </ul>
      </div>
    </div>
  );
}
