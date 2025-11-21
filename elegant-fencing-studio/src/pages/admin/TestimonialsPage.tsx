import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2, Star } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const testimonials = [
  {
    id: 1,
    name: "Amelia Roberts",
    role: "Global Facilities Director",
    quote: "SRK FENCE delivered an impeccable perimeter solution...",
    rating: 5,
    status: "Published",
  },
  {
    id: 2,
    name: "Colin Stewart",
    role: "Head of Infrastructure",
    quote: "From design workshops to installation...",
    rating: 5,
    status: "Published",
  },
  {
    id: 3,
    name: "Sofia Martinez",
    role: "Operations Manager",
    quote: "Their materials knowledge and craftsmanship...",
    rating: 5,
    status: "Draft",
  },
];

const TestimonialsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground">Testimonials</h1>
          <p className="text-muted-foreground mt-2">Manage customer testimonials</p>
        </div>
        <Button className="bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow">
          <Plus className="mr-2 h-4 w-4" />
          Add Testimonial
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Testimonial List</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search testimonials..." className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Quote</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {testimonials.map((testimonial) => (
                <TableRow key={testimonial.id}>
                  <TableCell className="font-medium">{testimonial.name}</TableCell>
                  <TableCell>{testimonial.role}</TableCell>
                  <TableCell className="max-w-md truncate">{testimonial.quote}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        testimonial.status === "Published"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {testimonial.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialsPage;

