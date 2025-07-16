<template>
    <div class="container py-5">
        <div class="card shadow-lg">
            <!-- ปรับจาก bg-primary เป็น bg-success และเพิ่มโลโก้ -->
            <div class="card-header bg-success text-white d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <img :src="require('@/assets/logo.jpg')" alt="โลโก้" height="70" class="me-3 rounded-circle" />

                    <h4 class="mb-0">
                        <i class="fas fa-fish me-2"></i>ระบบจัดการออเดอร์ปลาส้ม
                    </h4>
                </div>
                <div class="d-flex gap-2 ms-auto">
                    <button class="btn btn-warning" @click="nextRound">
                        <i class="fas fa-redo"></i> เปิดรอบใหม่
                    </button>
                    <button class="btn btn-danger" @click="resetAll">
                        <i class="fas fa-trash"></i> เริ่มระบบใหม่
                    </button>
                </div>
            </div>

            <div class="card-body">
                <div class="mb-4">
                    <strong>รอบปัจจุบัน:</strong> {{ roundTitles[currentRound] || 'รอบ ' + currentRound }}
                </div>

                <div class="row mb-3">
                    <div class="col-md-8">
                        <input type="text" class="form-control" v-model="roundTitles[currentRound]"
                            placeholder="ชื่อรอบ เช่น รอบประจำสัปดาห์ 16-22 ก.ค." />
                    </div>
                    <div class="col-md-4 text-end">
                        <button class="btn btn-outline-success" @click="exportCSV(currentRound)">
                            <i class="fas fa-file-csv"></i> ดาวน์โหลด CSV รอบนี้
                        </button>
                    </div>
                </div>

                <!-- ฟอร์มออเดอร์ -->
                <div class="row g-3 mb-4">
                    <div class="col-md-3">
                        <label class="form-label">สินค้า</label>
                        <select v-model="newOrder.product" class="form-select">
                            <option disabled value="">-- กรุณาเลือกสินค้า --</option>
                            <option v-for="item in products" :key="item.id" :value="item.name">
                                {{ item.name }}
                            </option>
                        </select>
                    </div>

                    <div class="col-md-2">
                        <label class="form-label">จำนวน (กก.)</label>
                        <input type="number" v-model.number="newOrder.kg" min="1" class="form-control" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">ชื่อลูกค้า</label>
                        <input type="text" v-model="newOrder.customer" class="form-control" placeholder="ชื่อ-สกุล" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">ที่อยู่จัดส่ง</label>
                        <input type="text" v-model="newOrder.address" class="form-control" placeholder="ที่อยู่" />
                    </div>

                    <div class="col-md-1">
                        <label class="form-label">สถานะ</label>
                        <select v-model="newOrder.status" class="form-select">
                            <option value="ยังไม่ชำระ">ยังไม่ชำระ</option>
                            <option value="ชำระแล้ว">ชำระแล้ว</option>
                        </select>
                    </div>

                    <div class="col-12 text-end mt-3">
                        <button class="btn btn-success px-4" @click="addOrder">
                            <i class="fas fa-plus me-2"></i>เพิ่มออเดอร์
                        </button>
                    </div>
                </div>

                <!-- ตารางออเดอร์ -->
                <div class="accordion mt-4" id="roundAccordion">
                    <div class="accordion-item" v-for="(orders, round) in rounds" :key="round">
                        <h2 class="accordion-header" :id="'heading-' + round">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#collapse-' + round" :aria-expanded="round === currentRound"
                                :aria-controls="'collapse-' + round">
                                {{ roundTitles[round] || 'รอบที่ ' + round }} ({{ orders.length }} รายการ)
                            </button>
                        </h2>
                        <div :id="'collapse-' + round" class="accordion-collapse collapse"
                            :class="{ show: round === currentRound }" :aria-labelledby="'heading-' + round"
                            data-bs-parent="#roundAccordion">
                            <div class="accordion-body">
                                <table class="table table-bordered table-striped text-center align-middle">
                                    <thead class="table-light">
                                        <tr>
                                            <th>#</th>
                                            <th>สินค้า</th>
                                            <th>จำนวน (กก.)</th>
                                            <th>ลูกค้า</th>
                                            <th>ที่อยู่จัดส่ง</th>
                                            <th>สถานะ</th>
                                            <th>รวม (บาท)</th>
                                            <th>จัดการ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="orders.length === 0">
                                            <td colspan="8">ยังไม่มีออเดอร์</td>
                                        </tr>
                                        <tr v-for="(order, index) in orders" :key="index">
                                            <td>{{ index + 1 }}</td>
                                            <td>
                                                <input v-model="order.product" class="form-control form-control-sm" />
                                            </td>
                                            <td>
                                                <input v-model.number="order.kg" type="number" min="1" class="form-control form-control-sm" />
                                            </td>
                                            <td>
                                                <input v-model="order.customer" class="form-control form-control-sm" />
                                            </td>
                                            <td>
                                                <input v-model="order.address" class="form-control form-control-sm" />
                                            </td>
                                            <td>
                                                <select v-model="order.status" class="form-select form-select-sm">
                                                    <option value="ยังไม่ชำระ">ยังไม่ชำระ</option>
                                                    <option value="ชำระแล้ว">ชำระแล้ว</option>
                                                </select>
                                            </td>
                                            <td>{{ order.kg * pricePerKg | currency }}</td>
                                            <td>
                                                <button class="btn btn-sm btn-outline-danger" @click="deleteOrder(round, index)">
                                                    ลบ
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- สรุปยอด -->
                <div class="alert alert-info mt-4">
                    <strong>ยอดรวมรอบ {{ currentRound }}:</strong> {{ totalKg }} กก. /
                    <strong>{{ totalPrice | currency }} บาท</strong>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pricePerKg: 170,
            currentRound: 1,
            rounds: {},
            roundTitles: {},
            newOrder: {
                product: '',
                kg: 1,
                customer: '',
                address: '',
                status: 'ยังไม่ชำระ',
            },
            products: [
                { id: 1, name: 'ปลาส้มปลาจีน' },
                { id: 2, name: 'ปลาส้มปลาตะเพียน' },
                { id: 3, name: 'ปลาส้มแผ่น' },
            ],
        };
    },
    computed: {
        totalKg() {
            return (this.rounds[this.currentRound] || []).reduce((sum, o) => sum + o.kg, 0);
        },
        totalPrice() {
            return this.totalKg * this.pricePerKg;
        },
    },
    methods: {
        addOrder() {
            if (!this.rounds[this.currentRound]) {
                this.$set(this.rounds, this.currentRound, []);
            }
            if (this.newOrder.product && this.newOrder.kg && this.newOrder.customer && this.newOrder.address) {
                this.rounds[this.currentRound].push({ ...this.newOrder });
                this.saveToLocalStorage();
                this.newOrder = { product: '', kg: 1, customer: '', address: '', status: 'ยังไม่ชำระ' };
            } else {
                alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            }
        },
        deleteOrder(round, index) {
            this.rounds[round].splice(index, 1);
            this.saveToLocalStorage();
        },
        nextRound() {
            this.currentRound += 1;
            this.$set(this.rounds, this.currentRound, []);
            this.saveToLocalStorage();
        },
        saveToLocalStorage() {
            localStorage.setItem('rounds', JSON.stringify(this.rounds));
            localStorage.setItem('roundTitles', JSON.stringify(this.roundTitles));
            localStorage.setItem('currentRound', this.currentRound);
        },
        loadFromLocalStorage() {
            const savedRounds = localStorage.getItem('rounds');
            const savedTitles = localStorage.getItem('roundTitles');
            const savedCurrent = localStorage.getItem('currentRound');
            if (savedRounds) this.rounds = JSON.parse(savedRounds);
            if (savedTitles) this.roundTitles = JSON.parse(savedTitles);
            if (savedCurrent) this.currentRound = parseInt(savedCurrent);
        },
        exportCSV(roundNumber) {
            const orders = this.rounds[roundNumber] || [];
            if (!orders.length) return alert('ไม่มีข้อมูลออเดอร์ในรอบนี้');
            const csv = [
                ['ลำดับ', 'สินค้า', 'จำนวน (กก.)', 'ลูกค้า', 'ที่อยู่', 'สถานะ', 'รวม (บาท)'],
                ...orders.map((o, i) => [
                    i + 1,
                    o.product,
                    o.kg,
                    o.customer,
                    o.address,
                    o.status || 'ยังไม่ชำระ',
                    o.kg * this.pricePerKg,
                ])
            ].map(row => row.join(',')).join('\n');

            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.setAttribute('download', `orders_round_${roundNumber}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
        resetAll() {
            if (confirm('คุณต้องการล้างข้อมูลทั้งหมดและเริ่มต้นใหม่หรือไม่?')) {
                this.rounds = { 1: [] };
                this.roundTitles = {};
                this.currentRound = 1;
                this.saveToLocalStorage();
            }
        }
    },
    created() {
        this.loadFromLocalStorage();
    },
    filters: {
        currency(value) {
            return Number(value).toLocaleString('th-TH');
        },
    },
};
</script>

<style scoped>
.card-header i {
    font-size: 1.2rem;
}
</style>